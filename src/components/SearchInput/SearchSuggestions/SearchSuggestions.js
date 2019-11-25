import PropTypes from 'prop-types';

const SearchSuggestions = ({ query, results, setQuery }) => {
    const filteredList = results.filter((result) => {
        const searchQuery = query.toLowerCase();
        return result.name.toLowerCase().includes(searchQuery) && result.name.toLowerCase()[0] === query.toLowerCase()[0];
    });

    const listResults = filteredList.map((result, index) => (
        <div role="menuitem" tabIndex={index} key={result.code} onClick={() => setQuery(result.name)} onKeyDown={() => setQuery(result.name)}>
            {result.name}
            <style jsx>
                {`
                    div {
                        padding: 5px 0;
                        font-size: 17px;
                    }

                    div:hover {
                        cursor: pointer;
                        background-color: #F8F8F8;
                    }
                `}
            </style>
        </div>
    ));

    return (
        <div>
            { listResults }
            <style jsx>
                {`
                    div {
                        width: inherit;
                        border-right: 1px solid #000;
                        border-left: 1px solid #000;
                        border-bottom: 1px solid #000;
                        text-indent: 11px;
                        padding: 0;
                        margin: 0;
                    }
                `}
            </style>
        </div>
    );
};

SearchSuggestions.propTypes = {
    query: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
    setQuery: PropTypes.func,
};

SearchSuggestions.defaultProps = {
    query: '',
    results: [],
    setQuery: () => {},
};

export default SearchSuggestions;
