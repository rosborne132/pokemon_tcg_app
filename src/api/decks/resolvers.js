import dbClient, { parseData } from '../../../lib/dynamodb'

const deckResolvers = {
    Query: {
        async getUserDecks(parent, args, context) {
            try {
                const params = {
                    TableName: 'user-decks',
                    Key: {
                        username: { S: context.user.nickname }
                    }
                }

                await dbClient.getItem(params, (err, data) => {
                    if (err) {
                        console.log('Error', err)
                        return
                    }

                    // console.log(parseData.unmarshall(data.Item))
                    return parseData.unmarshall(data.Item)
                })
            } catch (err) {
                console.error(err)
            }
        },
    },
}

export default deckResolvers
