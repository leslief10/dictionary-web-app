import { useState, useRef, useEffect } from 'react';
import { ArrowIcon } from '../icons/ArrowIcon';

const FontSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Sans Serif');
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const optionsRef = useRef([]);

  const fonts = [
    { name: 'Sans Serif', fontFamily: 'var(--font-inter)' },
    { name: 'Serif', fontFamily: 'var(--font-lora)' },
    { name: 'Mono', fontFamily: 'var(--font-inconsolata)' }
  ];

  useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
        setActiveIndex(0);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) => (prev < fonts.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (activeIndex >= 0) {
          handleFontSelect(fonts[activeIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (activeIndex >= 0 && optionsRef.current[activeIndex]) {
      optionsRef.current[activeIndex].focus();
    }
  }, [activeIndex]);

  const handleFontSelect = (font) => {
    setSelectedFont(font.name);
    setIsOpen(false);
    document.documentElement.style.fontFamily = font.fontFamily;
  };

  return (
    <div className="relative flex" onKeyDown={handleKeyDown} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex flex-row items-center gap-3 text-sm md:text-lg font-bold text-charleston-green dark:text-white hover:cursor-pointer outline-lavander-indigo dark:outline-white"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="font-options"
      >
        <span>{selectedFont}</span>
        <ArrowIcon className={`text-lavander-indigo transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul
          id="font-options"
          role="listbox"
          aria-label="Available fonts"
          className="absolute top-9 right-0 py-6 px-6 min-w-[10rem] rounded-2xl list-none bg-white dark:bg-charleston-green shadow-custom dark:shadow-custom-dark-mode z-10"
          aria-activedescendant={activeIndex >= 0 ? `font-option-${activeIndex}` : undefined}
          tabIndex={-1}
        >
          {fonts.map((font, index) => (
            <li
              key={font.name}
              id={`font-option-${index}`}
              role="option"
              ref={(el) => (optionsRef.current[index] = el)}
              aria-selected={selectedFont === font.name}
              onClick={() => handleFontSelect(font)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleFontSelect(font);
                }
              }}
              tabIndex={activeIndex === index ? 0 : -1}
              style={{ fontFamily: font.fontFamily }}
              className={`even:py-2 text-sm md:text-lg font-bold text-charleston-green dark:text-white hover:cursor-pointer hover:text-lavander-indigo focus:text-lavander-indigo focus:outline-none ${
                activeIndex === index ? 'text-lavander-indigo' : ''
              }`}
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
