import LandingHeader from '../../Headers/LandingHeader/LandingHeader'
import Meta from '../../Meta/Meta'

const Layout: React.FC = ({ children }) => (
    <>
        <Meta />
        <LandingHeader />
        <main>
            <div className="container">{children}</div>
        </main>
    </>
)

export default Layout
