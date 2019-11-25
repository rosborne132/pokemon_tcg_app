const SearchSuggestions = ({ query, results, setQuery }) => {
    const filteredList = results.filter(result => {
        const searchQuery = query.toLowerCase()
        return result.name.toLowerCase().includes(searchQuery) && result.name.toLowerCase()[0] === query.toLowerCase()[0]
    })

    const listResults = filteredList.map(result => {
        return (
            <li key={result.code} onClick={() => setQuery(result.name)}>
                {result.name}
                <style jsx>{`
                    li {
                        list-style-type: none;
                        padding: 5px 0;
                        font-size: 17px;
                    }

                    li:hover {
                        cursor: pointer;
                        background-color: #F8F8F8;
                    }
                `}</style>
            </li>
        )
    })

    return (
        <ul>
            { listResults }
            <style jsx>{`
                ul {
                    width: inherit;
                    border-right: 1px solid #000;
                    border-left: 1px solid #000;
                    border-bottom: 1px solid #000;
                    text-indent: 11px;
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </ul>
    )
}

SearchSuggestions.defaultProps = {
    results: []
}

export default SearchSuggestions