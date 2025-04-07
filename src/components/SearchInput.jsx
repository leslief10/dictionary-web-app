import { useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';
import { useDictionary } from '../hooks/useDictionary';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [inputError, setInputError] = useState(false);
  const { searchWord } = useDictionary();

  const handleChange = (event) => {
    setSearch(event.target.value);
    if (inputError) {
      setInputError(false);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!search.trim()) {
      setInputError(true);
      return;
    }

    searchWord(search);
  };

  return (
    <>
      <form role="search" onSubmit={handleSearch}>
        <div className="flex flex-col gap-2 px-6">
          <div className="flex">
            <input
              aria-label="Search for any word in the dictionary"
              className={`w-full h-12 pr-3 pl-6 rounded-l-2xl bg-cultured dark:bg-eerie-black outline-none placeholder:text-sonic-silver dark:placeholder:text-bright-gray font-bold text-charleston-green dark:text-white
                ${inputError ? 'border border-orange-red' : ''}
                [&::-webkit-search-cancel-button]:hidden`}
              id="search-input"
              name="query"
              minLength="1"
              placeholder="Search for any word..."
              type="search"
              value={search}
              onChange={handleChange}
              autoComplete="off"
            />
            <button type="submit" className="w-auto h-12 pr-6 pl-3 rounded-r-2xl bg-cultured dark:bg-eerie-black">
              <img src={searchIcon} alt="Click to search" />
            </button>
          </div>
          {inputError && <span className="text-base text-orange-red">Whoops, can't be empty...</span>}
        </div>
      </form>
    </>
  );
};

export { SearchInput };
