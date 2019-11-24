const SearchSuggestions = ({ results }) => <ul>{ results.map(result => <li key={result.key}>{result.name}</li>)}</ul>

SearchSuggestions.defaultProps = {
    results: []
}

export default SearchSuggestions