import { WordHeader } from './WordHeader';
import { WordMeaning } from './WordMeaning';
import { WordSource } from './WordSource';

const WordDefinitions = ({ words }) => {
  return (
    <div className="flex flex-col gap-10 px-6 py-7">
      {words.map((word, index) => (
        <section key={`${word.word}-${index}`} className="flex flex-col gap-10">
          <WordHeader word={word.word} phonetics={word.phonetics} />
          {word.meanings.map((meaning, index) => (
            <WordMeaning key={index} meaning={meaning} />
          ))}
          <WordSource sourceUrls={word.sourceUrls} />
        </section>
      ))}
    </div>
  );
};

export { WordDefinitions };
