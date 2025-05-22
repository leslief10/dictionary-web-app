import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput';
import { Definition } from './components/Definition';
import { DictionaryProvider } from './context/DictionaryContext';

function App() {
  return (
    <DictionaryProvider>
      <Header />
      <main className="flex flex-col flex-auto">
        <SearchInput />
        <Definition />
      </main>
    </DictionaryProvider>
  );
}

export default App;
