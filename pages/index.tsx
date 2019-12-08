import { useContext } from 'react';
import Layout from '../src/components/Layout/Layout';
import UserContextProvider, { UserContext } from '../src/context/UserContext';

const Home: React.FC = () => {
    const { loading, user } = useContext(UserContext);

    return (
        <UserContextProvider>
            <Layout>
                <h1>Next.js and Auth0 Example</h1>

                {loading && <p>Loading login info...</p>}

                {!loading && !user && (
                    <>
                        <p>
                            {`To test the login click in ${<i>Login</i>}`}
                        </p>
                        <p>
                            {`Once you have logged in you should be able to click in ${<i>Profile</i>} and ${<i>Logout</i>}`}
                        </p>
                    </>
                )}

                {user && (
                    <div>
                        <h4>Rendered user info on the client</h4>
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
                )}
            </Layout>
        </UserContextProvider>
    );
};

export default Home;
