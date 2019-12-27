type Props = {
    results: string[]
    setQuery: (result) => void
}

const SearchSuggestions: React.FC<Props> = ({ results = [], setQuery }): JSX.Element => {
    const listResults = results.map((result, index) => (
        <div role="menuitem" tabIndex={index} key={result} onClick={() => setQuery(result)} onKeyDown={() => setQuery(result)}>
            {result}
            <style jsx>
                {`
                    div {
                        padding: 5px 0;
                        width: 252px;
                        font-size: 17px;
                   
                    }

                    div:hover {
                        cursor: pointer;
                        background-color: #F8F8F8;
                    }
                `}
            </style>
        </div>
    ))

    return (
        <div>
            { listResults }
            <style jsx>
                {`
                    div {
                        position: absolute;
                        width: inherit;
                        border-right: 1px solid #000;
                        border-left: 1px solid #000;
                        border-bottom: 1px solid #000;
                        text-indent: 11px;
                    }
                `}
            </style>
        </div>
    )
}

export default SearchSuggestions
