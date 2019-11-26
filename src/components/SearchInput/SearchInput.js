import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchSuggestions from './SearchSuggestions/SearchSuggestions';

const SearchInput = ({ queryName }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const upperCaseStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const getInfo = async () => {
        const searchQuery = query.toLocaleLowerCase();
        const { data } = await axios.get(`https://api.pokemontcg.io/v1/${queryName}?name=${searchQuery}`);

        const resultList = data[queryName].map((result) => result.name);
        const resultKeys = Array.from(new Set(resultList));
        const newResults = resultKeys.filter((result) => result.toLowerCase() !== searchQuery.trim());

        setResults([...newResults]);
    };

    useEffect(() => {
        if (query && query.length >= 1) {
            getInfo();
            return;
        }

        setResults([]);
    }, [query]);

    return (
        <span>
            <input
                placeholder={`Search ${upperCaseStr(queryName)}...`}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />

            { results.length
                ? <SearchSuggestions results={results} query={query} setQuery={setQuery} />
                : '' }

            <style jsx>
                {`
                input {
                    position:relative;  
                    border: 1px solid #000;
                    width: 250px;
                    height: 30px;
                    text-indent: 10px;
                    font-size: 17px;
                }

                span {
                    padding: 40px;
                }
            `}
            </style>
        </span>
    );
};

SearchInput.propTypes = {
    queryName: PropTypes.string,
};

SearchInput.defaultProps = {
    queryName: '',
};

export default SearchInput;
