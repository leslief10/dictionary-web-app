import './App.css';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput';
import { Definition } from './components/Definition';
import { DictionaryProvider } from './context/DictionaryContext';

function App() {
  return (
    <DictionaryProvider>
      <Header />
      <SearchInput />
      <Definition />
    </DictionaryProvider>
  );
}

export default App;
