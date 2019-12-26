import App from 'next/app'
import Router from 'next/router'
import { fetchUser } from '../lib/user'
// import auth0 from '../lib/auth0'
import UserContext from '../src/context/UserContext'

class MyApp extends App {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            loading: false,
        }
    }

    // static async getInitialProps({ ctx }) {
    //     const { req, res } = ctx

    //     if (typeof window === 'undefined') {
    //         const data = await auth0.getSession(req)

    //         if (data === null) {
    //             res.writeHead(302, {
    //                 Location: '/api/login',
    //             })
    //             res.end()
    //             return
    //         }

    //         const { user } = data

    //         return { user }
    //     }
    // }

    async componentDidMount() {
        this.setLoading(true)
        const user = await fetchUser()

        if (user === null || this.isEmpty(user)) {
            this.setLoading(false)
            Router.push('/')
            return
        }

        this.setUser(user)
        this.setLoading(false)
    }

    isEmpty = (obj) => Object.keys(obj).length === 0

    setLoading = (loading) => this.setState({ loading })

    setUser = (user) => {
        const loggedInUser = { ...user }

        this.setState({ user: loggedInUser })
    }

    render() {
        const { loading, user } = this.state
        const { Component, pageProps } = this.props
        const newValues = { loading, user }

        return (
            <UserContext.Provider value={newValues}>
                <Component {...pageProps} />
            </UserContext.Provider>
        )
    }
}

export default MyApp
