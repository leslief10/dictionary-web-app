import { createContext, useState } from 'react';

const DictionaryContext = createContext();

const DictionaryProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const searchWord = async (search) => {
    setIsLoading(true);
    setError({});

    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Word not found`);
      }
      const data = await response.json();
      setWords(data);
    } catch (error) {
      setError(error);
      setWords([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DictionaryContext.Provider value={{ words, isLoading, error, searchWord }}>{children}</DictionaryContext.Provider>
  );
};

export { DictionaryProvider, DictionaryContext };
