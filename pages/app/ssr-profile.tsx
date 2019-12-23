import auth0 from '../../lib/auth0'
import AppLayout from '../../src/components/Layouts/AppLayout/AppLayout'

const Profile = ({ user }) => (
    <AppLayout>
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
    </AppLayout>
)

Profile.getInitialProps = async ({ req, res }) => {
    if (typeof window === 'undefined') {
        const data = await auth0.getSession(req)

        if (data === null) {
            res.writeHead(302, {
                Location: '/api/login',
            })
            res.end()
            return
        }

        const { user } = data

        return { user }
    }
}

export default Profile
