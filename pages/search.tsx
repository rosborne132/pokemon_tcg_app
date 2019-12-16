import Head from 'next/head'
import SearchInput from '../src/components/SearchInput/SearchInput'

const Search: React.FC = () => (
    <div className="body">
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

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
    ` }
        </style>
    </div>
)

export default Search
