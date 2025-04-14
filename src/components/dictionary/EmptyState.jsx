const EmptyState = () => {
  return (
    <div className="flex flex-col flex-auto items-center justify-center px-6 md:px-10 text-center md:min-w-3xl md:max-w-3xl">
      <span className="text-6xl mb-11">&#128214;</span>
      <h3 className="mb-6 text-lg md:text-2xl font-bold text-charleston-green dark:text-white">
        The world of words awaits. Search for any word and explore its definitions!
      </h3>
    </div>
  );
};

export { EmptyState };
