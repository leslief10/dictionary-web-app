import { useDictionary } from '../hooks/useDictionary';
import playIcon from '../assets/images/icon-play.svg';

const Definition = () => {
  const { words } = useDictionary();
  return (
    <div className="flex flex-col gap-10 px-6 py-7">
      {words.map((word, index) => (
        <section key={`${word.word}-${index}`} className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xxl font-bold text-charleston-green">{word.word}</h2>
            <div className="flex flex-row gap-8">
              {word.phonetics.map((phonetic, index) => (
                <div key={index} className="flex items-center flex-flex-wrap gap-1">
                  {phonetic.text && <span className="text-lg text-lavander-indigo">{phonetic.text}</span>}
                  {phonetic.audio && (
                    <button
                      onClick={() => new Audio(phonetic.audio).play()}
                      aria-label="Listen to pronunciation"
                      className="w-6 h-6"
                    >
                      <img src={playIcon} alt="Listen to pronunciation" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          {word.meanings.map((meaning, index) => (
            <div key={index}>
              <div className="flex gap-4 items-center mb-7 text-lg font-bold italic text-charleston-green">
                {meaning.partOfSpeech}
                <div className="w-full h-px bg-bright-gray"></div>
              </div>
              <span className="inline-block mb-4-half text-base text-sonic-silver">Meaning</span>
              <ul className="px-4-half marker:text-lavander-indigo">
                {meaning.definitions.map((def, defIndex) => (
                  <li key={defIndex} className="text-base not-last:mb-3">
                    {def.definition}
                  </li>
                ))}
              </ul>
              {meaning.synonyms.length > 0 && (
                <div className="flex gap-6 mt-6">
                  <span className="text-base text-sonic-silver">Synonyms</span>
                  <p className="text-base font-bold text-lavander-indigo">{meaning.synonyms.join(', ')}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export { Definition };
