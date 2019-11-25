import { useState, useEffect } from "react"
import axios from "axios"
import SearchSuggestions from "./SearchSuggestions/SearchSuggestions"

const SearchInput = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const getInfo = async () => {
        const searchQuery = query.toLocaleLowerCase()
        const { data: { sets }} = await axios.get(`https://api.pokemontcg.io/v1/sets?name=${searchQuery}`)
        const newResults = sets.filter(result => result.name.toLowerCase() !== searchQuery.trim())

        setResults([...newResults])
    }

    useEffect(() => {
        if (query && query.length >= 1) {
            getInfo()
            return 
        }

        setResults([])   
    }, [ query ])

    return (
        <span>
             <input
                placeholder="Search Set..."
                onChange={e => setQuery(e.target.value)}
                value={query}
            />

            { results.length
                ? <SearchSuggestions results={results} query={query} setQuery={setQuery} /> 
                : "" }

            <style jsx>{`
                input {
                    border: 1px solid #000;
                    width: 250px;
                    height: 30px;
                    text-indent: 10px;
                    font-size: 17px;
                }
            `}</style>
        </span>
    )
}

export default SearchInput
