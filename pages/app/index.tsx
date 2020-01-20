import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { AppLayout } from '../../src/components/Elements'
import withApollo from '../../lib/apollo'

const GET_USER_DECKS = gql`
    query GetUserDecks {
        getUserDecks {
            username
            deckId
            deckName
        }
    }
`

const App: React.FC = (): JSX.Element => {
    const { data } = useQuery(GET_USER_DECKS)

    if (!data) return <div>Loading</div>

    // const { getUserDecks: { name, nickname, picture } } = data
    console.log(data)

    return (
        <AppLayout>
            <h1>App Home</h1>

            {/* <div>
                <img src={picture} alt="profile" />
                <p>
                    <span className="fw_b">nickname: </span>
                    {nickname}
                </p>
                <p>
                    <span className="fw_b">name: </span>
                    {name}
                </p>
            </div> */}
        </AppLayout>
    )
}

export default withApollo(App)
