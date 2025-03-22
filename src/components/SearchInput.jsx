import { useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`There was an error with the response: ${response.status}`);
      }
      const data = await response.json();
      console.log('data', data);
    } catch (error) {
      console.error('Error fetching the data from the API', error);
    }
  };

  return (
    <>
      <form role="search" onSubmit={handleSearch}>
        <div className="flex px-6">
          <input
            type="search"
            id="search-input"
            name="query"
            value={search}
            placeholder="Search for any word..."
            aria-label="Search for any word in the dictionary"
            className="w-full h-12 pr-3 pl-6 rounded-l-2xl bg-cultured"
            onChange={handleChange}
          />
          <button type="submit" className="w-auto h-12 pr-6 pl-3 rounded-r-2xl bg-cultured">
            <img src={searchIcon} alt="Click to search" />
          </button>
        </div>
      </form>
    </>
  );
};

export { SearchInput };
