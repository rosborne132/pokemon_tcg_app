import AppLayout from '../../src/components/Layouts/AppLayout/AppLayout'
import SearchInput from '../../src/components/SearchInput/SearchInput'

const Search = () => (
    <AppLayout>
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
    </AppLayout>
)

export default Search
