import dbClient, { parseData } from '../../../lib/dynamodb'

const getDecks = async ({ nickname }) => {
    const { Items } = await dbClient
        .scan({
            TableName: 'user-decks',
            ExpressionAttributeValues: {
                ':username': { S: nickname }
            },
            // KeyConditionExpression: 'username = :username',
            FilterExpression: 'contains (username, :username)'
        })
        .promise()

    return Items.map((item) => parseData.unmarshall(item))
}

const deckResolvers = {
    Query: {
        async getUserDecks(parent, args, { user }) {
            try {
                return await getDecks(user)
            } catch (err) {
                console.error(err)
            }
        },
    },
}

export default deckResolvers
