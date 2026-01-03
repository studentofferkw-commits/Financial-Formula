// FIX: Implemented the reusable SearchableSelect component.
import React, { useState, useEffect, useRef } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({ options, value, onChange, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        className={`w-full border border-gray-300 rounded-md shadow-sm ps-3 pe-10 py-2 text-start focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm ${className || 'bg-white dark:bg-slate-700 dark:border-slate-600'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block truncate">{selectedOption?.label || placeholder}</span>
        <span className="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-slate-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <div className="p-2">
            <input
              type="text"
              autoFocus
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-white dark:bg-slate-600 dark:border-slate-500 dark:text-white dark:placeholder-gray-400"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul>
            {filteredOptions.length > 0 ? filteredOptions.map((option) => (
              <li
                key={option.value}
                className="text-gray-900 dark:text-gray-200 cursor-default select-none relative py-2 ps-3 pe-9 hover:bg-teal-100 dark:hover:bg-slate-600"
                onClick={() => handleSelect(option.value)}
              >
                <span className={`block truncate ${value === option.value ? 'font-semibold' : 'font-normal'}`}>
                  {option.label}
                </span>
                {value === option.value && (
                  <span className="text-teal-600 dark:text-teal-400 absolute inset-y-0 end-0 flex items-center pe-4">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </li>
            )) : (
              <li className="text-gray-500 dark:text-gray-400 text-center py-2 px-3">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;