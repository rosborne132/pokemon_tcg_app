import { Suspense } from 'react'
import useSWR from 'swr'
import AppLayout from '../../src/components/Layouts/AppLayout/AppLayout'
import SearchInput from '../../src/components/SearchInput/SearchInput'

const createCardListDisplay = ({ cards }) => cards.map(({ id, imageUrl, name }) => (
    <div key={id} className="bs_xl">
        <img src={imageUrl} alt={name} />
    </div>
))

const Search: React.FC = () => {
    const fetchMethod = (url) => fetch(url).then((_) => _.json())

    const { error, data } = useSWR(
        'https://api.pokemontcg.io/v1/cards',
        fetchMethod,
    )

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <AppLayout>
            <>
                <div className="hero">
                    <h1>Card Form Component!</h1>
                    <SearchInput queryName="sets" />
                    <SearchInput queryName="cards" />
                </div>


                <div className="container">
                    <h1>Card List Component!</h1>

                    <Suspense fallback={<div>loading...</div>}>
                        <div className="grid">
                            { createCardListDisplay(data) }
                        </div>
                    </Suspense>
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
            </>
        </AppLayout>
    )
}

export default Search
