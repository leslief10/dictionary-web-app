import { PlayIcon } from '../icons/PlayIcon';

const WordHeader = ({ word, phonetics }) => {
  return (
    <div>
      <h2 className="text-3xxl md:text-6xxl font-bold text-charleston-green dark:text-white">{word}</h2>
      <div className="flex flex-row flex-wrap gap-x-8 gap-y-1 pt-2.5">
        {phonetics.map((phonetic, index) => {
          if (!phonetic.text) return null;
          return (
            <div key={index} className="flex items-center gap-1">
              {phonetic.text && <span className="text-lg md:text-2xl text-lavander-indigo">{phonetic.text}</span>}
              {phonetic.text && phonetic.audio && (
                <button
                  onClick={() => new Audio(phonetic.audio).play()}
                  aria-label="Listen to pronunciation"
                  className="w-6 h-6 md:w-8 md:h-8 outline-lavander-indigo dark:outline-white hover:cursor-pointer"
                >
                  <PlayIcon className="w-6 h-6 md:w-8 md:h-8 text-lavander-indigo opacity-50 hover:opacity-100" />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { WordHeader };
