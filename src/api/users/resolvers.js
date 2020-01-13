import auth0 from '../../../lib/auth0'

const userResolvers = {
    Query: {
        async getUser(parent, args, context) {
            try {
                const data = await auth0.getSession(context.req)

                if (data === null) {
                    console.error('No user found')
                }

                const { user } = data
                return user
            } catch (err) {
                console.error(err)
            }
        },
    },
}

export default userResolvers
