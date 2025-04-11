import { useEffect, useState } from 'react';
import { MoonIcon } from '../icons/MoonIcon';

const ToggleButton = () => {
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDark(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="flex flex-row gap-3">
      <button
        onClick={() => setIsDark(!isDark)}
        className="flex items-center gap-3 outline-lavander-indigo dark:outline-white"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="w-10 h-5 p-tiny bg-sonic-silver hover:bg-lavander-indigo hover:cursor-pointer dark:bg-lavander-indigo rounded-full">
          <div
            className={`w-3.5 h-3.5 rounded-full bg-white transform transition-transform ${
              isDark ? 'translate-x-5' : ''
            }`}
          />
        </div>
      </button>
      <MoonIcon
        className="text-sonic-silver dark:text-lavander-indigo"
        alt={isDark ? 'Moon Icon is in dark mode' : 'Moon Icon is in light mode'}
      />
    </div>
  );
};

export { ToggleButton };
