const ErrorState = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 min-h-screen text-center">
      <span className="text-6xl mb-11">&#128533;</span>
      <h3 className="mb-6 text-lg font-bold text-charleston-green">{error.title}</h3>
      <p className="text-base text-sonic-silver">{error.message}</p>
      <p className="text-base text-sonic-silver">{error.resolution}</p>
    </div>
  );
};

export { ErrorState };
