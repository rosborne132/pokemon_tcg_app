import { useContext } from 'react'
// import { useQuery } from '@apollo/react-hooks'
// import gql from 'graphql-tag'
import UserContext from '../../src/context/UserContext'
import { AppLayout } from '../../src/components/Elements'
import withApollo from '../../lib/apollo'

// const HELLO_QUERY = gql`
//     query HelloQuery {
//         sayHello
//     }
// `

const App: React.FC = (): JSX.Element => {
    const { user } = useContext(UserContext)

    // const { data, loading } = useQuery(HELLO_QUERY)

    return (
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
}

export default withApollo(App)
