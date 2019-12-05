import Header from '../Header/Header';
import Meta from '../Meta/Meta';

const Layout = ({ children }) => (
    <>
        <Meta />
        <Header />
        <main>
            <div className="container">{children}</div>
        </main>
    </>
);

export default Layout;
