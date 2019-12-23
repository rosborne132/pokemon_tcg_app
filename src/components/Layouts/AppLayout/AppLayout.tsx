import AppHeader from '../../Headers/AppHeader/AppHeader'
import Meta from '../../Meta/Meta'

const Layout: React.FC = ({ children }) => (
    <>
        <Meta />
        <AppHeader />
        <main>
            <div className="container">{children}</div>
        </main>
    </>
)

export default Layout
