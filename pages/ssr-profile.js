import React from 'react';
import auth0 from '../lib/auth0';
import { fetchUser } from '../lib/user';
import Layout from '../src/components/Layout/Layout';

const Profile = ({ user }) => (
    <Layout>
        <h1>Profile</h1>

        <div>
            <h3>Profile (server rendered)</h3>
            <img src={user.picture} alt="user profile" />
            <p>
nickname:
                {user.nickname}
            </p>
            <p>
name:
                {user.name}
            </p>
        </div>
    </Layout>
);

Profile.getInitialProps = async ({ req, res }) => {
    if (typeof window === 'undefined') {
        const { user } = await auth0.getSession(req);
        if (!user) {
            res.writeHead(302, {
                Location: '/api/login',
            });
            res.end();
            return;
        }
        return { user };
    }

    const cookie = req && req.headers.cookie;
    const user = await fetchUser(cookie);

    // A redirect is needed to authenticate to Auth0
    if (!user) {
        if (typeof window === 'undefined') {
            res.writeHead(302, {
                Location: '/api/login',
            });
            return res.end();
        }

        window.location.href = '/api/login';
    }

    return { user };
};

export default Profile;
