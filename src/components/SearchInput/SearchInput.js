import { useState } from "react"
import axios from "axios"
import SearchSuggestions from "./SearchSuggestions/SearchSuggestions"

const SearchInput = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const getInfo = async () => {
        const { data: { sets }} = await axios.get(`https://api.pokemontcg.io/v1/sets?name=${query}`)
        setResults(sets)
    }

    const handleInputChange = value => {
        setQuery(value)

        if (query && query.length >= 1) {
            getInfo()
        }
    }

    return (
        <form>
             <input
                placeholder="Search for..."
                onChange={e => handleInputChange(e.target.value)}
            />

            { results ? <SearchSuggestions results={results} />: ""}
        </form>
    )
}

export default SearchInput
