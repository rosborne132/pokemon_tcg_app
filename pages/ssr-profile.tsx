import NextPage from 'next'
import auth0 from '../lib/auth0';
import { fetchUser } from '../lib/user';
import Layout from '../src/components/Layout/Layout';

// type User = {
//     name: string
//     nickname: string
//     picture: string
// }

// type Props = {
//     user: User
// }

const Profile = ({ user }) => (
    <Layout>
        <h1>Profile</h1>

        <div>
            <h3>Profile (server rendered)</h3>
            <img src={user.picture} alt="user profile" />
            <p>
                <span className="fw_b">nickname: </span>
                {user.nickname}
            </p>
            <p>
                <span className="fw_b">name: </span>
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
