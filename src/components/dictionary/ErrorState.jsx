const ErrorState = ({ error }) => {
  return (
    <div className="flex flex-col flex-auto items-center justify-center px-6 md:px-10 text-center">
      <span className="text-6xl mb-11">&#128533;</span>
      <h3 className="mb-6 text-lg md:text-2xl font-bold text-charleston-green dark:text-white">{error.title}</h3>
      <p className="text-base md:text-lg text-sonic-silver dark:text-argent">{error.message}</p>
      <p className="text-base md:text-lg text-sonic-silver dark:text-argent">{error.resolution}</p>
    </div>
  );
};

export { ErrorState };
