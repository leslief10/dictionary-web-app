import { useState } from 'react';
import { ArrowIcon } from '../icons/ArrowIcon';

const FontSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Sans Serif');

  const fonts = [
    { name: 'Sans Serif', fontFamily: 'var(--font-inter)' },
    { name: 'Serif', fontFamily: 'var(--font-lora)' },
    { name: 'Mono', fontFamily: 'var(--font-inconsolata)' }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleFontSelect = (font) => {
    setSelectedFont(font.name);
    setIsOpen(false);
    document.documentElement.style.fontFamily = font.fontFamily;
  };

  return (
    <div className="relative flex">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center gap-3 text-sm md:text-lg font-bold text-charleston-green dark:text-white hover:cursor-pointer outline-lavander-indigo dark:outline-white"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{selectedFont}</span>
        <ArrowIcon className={`text-lavander-indigo transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul
          role="listbox"
          className="absolute top-9 right-0 py-6 px-6 min-w-[10rem] rounded-2xl list-none bg-white dark:bg-charleston-green shadow-custom dark:shadow-custom-dark-mode z-10"
        >
          {fonts.map((font) => (
            <li
              key={font.name}
              role="option"
              aria-selected={selectedFont === font.name}
              onClick={() => handleFontSelect(font)}
              style={{ fontFamily: font.fontFamily }}
              className="even:py-2 text-sm md:text-lg font-bold text-charleston-green dark:text-white hover:cursor-pointer hover:text-lavander-indigo"
            >
              {font.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { FontSelector };
