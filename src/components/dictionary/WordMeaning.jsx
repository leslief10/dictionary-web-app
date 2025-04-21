const WordMeaning = ({ meaning }) => {
  return (
    <div>
      <div className="flex gap-4 items-center mb-7 md:mb-10 text-lg md:text-2xl font-bold italic text-charleston-green dark:text-white">
        {meaning.partOfSpeech}
        <div className="w-full h-px bg-bright-gray"></div>
      </div>
      <span className="inline-block mb-4-half md:mb-6 text-base md:text-xl text-sonic-silver dark:text-argent">
        Meaning
      </span>
      <ul className="px-4-half md:pl-9 md:px-0 list-disc marker:text-lavander-indigo">
        {meaning.definitions.map((def, defIndex) => {
          if (def.example) {
            return (
              <li key={defIndex} className="text-base md:text-lg text-charleston-green dark:text-white not-last:mb-3">
                {def.definition}
                <span className="block pl-2 text-sonic-silver dark:text-argent">{`"${def.example}"`}</span>
              </li>
            );
          }
          return (
            <li key={defIndex} className="text-base md:text-lg text-charleston-green dark:text-white not-last:mb-3">
              {def.definition}
            </li>
          );
        })}
      </ul>
      {meaning.synonyms.length > 0 && (
        <div className="flex gap-6 mt-6 md:mt-10">
          <span className="text-base md:text-xl text-sonic-silver dark:text-argent">Synonyms</span>
          <p className="text-base md:text-xl font-bold text-lavander-indigo">{meaning.synonyms.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export { WordMeaning };
