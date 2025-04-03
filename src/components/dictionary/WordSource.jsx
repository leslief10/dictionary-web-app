import newWindowIcon from '../../assets/images/icon-new-window.svg';

const WordSource = ({ sourceUrls }) => {
  return (
    <div className="flex flex-col pt-6 border-t border-bright-gray">
      <span className="pb-2 text-sm text-sonic-silver underline">Source</span>
      {sourceUrls.map((source, sourceIndex) => (
        <span key={sourceIndex} className="flex text-sm">
          <a href={source} target="_blank" rel="noopener noreferrer" className="pr-4 text-charleston-green underline">
            {source}
          </a>
          <img src={newWindowIcon} alt="Click link to go to external definition" />
        </span>
      ))}
    </div>
  );
};

export { WordSource };
