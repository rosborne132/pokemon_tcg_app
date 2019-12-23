import auth0 from '../lib/auth0'
import { fetchUser } from '../lib/user'
import AppLayout from '../src/components/Layouts/AppLayout/AppLayout'

const App = ({ user }) => (
    <AppLayout>
        <h1>App Home</h1>

        <div>
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

App.getInitialProps = async ({ req, res }) => {
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

    const cookie = req && req.headers.cookie
    const user = await fetchUser(cookie)

    if (!user) {
        if (typeof window === 'undefined') {
            res.writeHead(302, {
                Location: '/api/login',
            })
            return res.end()
        }

        window.location.href = '/api/login'
    }

    return { user }
}

export default App
