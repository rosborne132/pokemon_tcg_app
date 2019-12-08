import App from 'next/app';
import UserContextProvider from '../src/context/UserContext';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <UserContextProvider>
                <Component {...pageProps} />
            </UserContextProvider>
        );
    }
}

export default MyApp;
