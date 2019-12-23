import LandingLayout from '../src/components/LandingLayout/LandingLayout'
import SearchInput from '../src/components/SearchInput/SearchInput'
import auth0 from '../lib/auth0'

const Search = () => (
    <LandingLayout>
        <div className="body">
            <div className="hero">
                <SearchInput queryName="sets" />
                <SearchInput queryName="cards" />
            </div>

            <style jsx>
                {`
                    .hero {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                    }
                `}
            </style>
        </div>
    </LandingLayout>
)

Search.getInitialProps = async ({ req, res }) => {
    if (typeof window === 'undefined') {
        const data = await auth0.getSession(req)

        if (data === null) {
            res.writeHead(302, {
                Location: '/api/login',
            })
            res.end()
            return
        }

        const { user } = data

        return { user }
    }
}

export default Search
