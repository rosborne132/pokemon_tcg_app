import { useContext } from 'react'
import UserContext from '../../src/context/UserContext'
import AppLayout from '../../src/components/Layouts/AppLayout/AppLayout'

const Profile = () => {
    const { user } = useContext(UserContext)

    return (
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
}

export default Profile
