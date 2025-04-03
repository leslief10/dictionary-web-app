const WordMeaning = ({ meaning }) => {
  return (
    <div>
      <div className="flex gap-4 items-center mb-7 text-lg font-bold italic text-charleston-green">
        {meaning.partOfSpeech}
        <div className="w-full h-px bg-bright-gray"></div>
      </div>
      <span className="inline-block mb-4-half text-base text-sonic-silver">Meaning</span>
      <ul className="px-4-half marker:text-lavander-indigo">
        {meaning.definitions.map((def, defIndex) => (
          <li key={defIndex} className="text-base text-charleston-green not-last:mb-3">
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
  );
};

export { WordMeaning };
