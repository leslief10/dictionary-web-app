import { useDictionary } from '../hooks/useDictionary';
import { ErrorState } from './dictionary/ErrorState';
import { WordDefinitions } from './dictionary/WordDefinitions';

const Definition = () => {
  const { words } = useDictionary();

  if (words && 'title' in words) {
    return <ErrorState error={words} />;
  }

  if (!words.length) {
    return null;
  }

  return <WordDefinitions words={words} />;
};

export { Definition };
