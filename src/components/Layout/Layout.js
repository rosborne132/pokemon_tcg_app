import Header from '../Header/Header';
import Meta from '../Meta/Meta';

function Layout({ user, loading = false, children }) {
    return (
        <>
            <Meta />

            <Header user={user} loading={loading} />

            <main>
                <div className="container">{children}</div>
            </main>
        </>
    );
}

export default Layout;
