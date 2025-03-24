import './App.css';
import { SearchInput } from './components/SearchInput';
import { Definition } from './components/Definition';
import { DictionaryProvider } from './context/DictionaryContext';

function App() {
  return (
    <DictionaryProvider>
      <SearchInput />
      <Definition />
    </DictionaryProvider>
  );
}

export default App;
