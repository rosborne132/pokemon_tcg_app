import { ApolloServer } from 'apollo-server-micro'
import { mergeResolvers, mergeTypeDefs } from 'graphql-toolkit'

import userResolvers from '../../src/api/users/resolvers'
import User from '../../src/api/users/Users.graphql'

const typeDefs = mergeTypeDefs([User])

const resolvers = mergeResolvers([userResolvers])

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: (request) => ({
        ...request,
    }),
})

export const config = {
    api: {
        bodyParser: process.env.NODE_ENV === 'production',
    },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
