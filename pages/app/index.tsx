import { useContext } from 'react'
import UserContext from '../../src/context/UserContext'
import AppLayout from '../../src/components/Layouts/AppLayout/AppLayout'

const App = () => {
    const { user } = useContext(UserContext)

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

export default App
