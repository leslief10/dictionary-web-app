import playIcon from '../../assets/images/icon-play.svg';

const WordHeader = ({ word, phonetics }) => {
  return (
    <div>
      <h2 className="text-3xxl font-bold text-charleston-green">{word}</h2>
      <div className="flex flex-row flex-wrap gap-x-8 gap-y-1">
        {phonetics.map((phonetic, index) => (
          <div key={index} className="flex items-center gap-1">
            {phonetic.text && <span className="text-lg text-lavander-indigo">{phonetic.text}</span>}
            {phonetic.text && phonetic.audio && (
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
  );
};

export { WordHeader };
