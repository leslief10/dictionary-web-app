import newWindowIcon from '../../assets/images/icon-new-window.svg';

const WordSource = ({ sourceUrls }) => {
  return (
    <div className="flex flex-col pt-6 md:pt-5 border-t border-bright-gray">
      <span className="pb-2 text-sm text-sonic-silver dark:text-argent underline">Source</span>
      {sourceUrls.map((source, sourceIndex) => (
        <span key={sourceIndex} className="flex text-sm">
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-4 text-charleston-green dark:text-white underline outline-lavander-indigo dark:outline-white hover:cursor-pointer hover:text-lavander-indigo"
          >
            {source}
          </a>
          <img src={newWindowIcon} alt="Click link to go to external definition" />
        </span>
      ))}
    </div>
  );
};

export { WordSource };
