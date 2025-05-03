"use client";

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';

type DropdownProps = {
  title: string;
  children: React.ReactNode;
};

export default function Dropdown({ title, children }: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target as Node)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [dropdownOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [dropdownOpen]);

  return (
    <div className="relative" ref={dropdown}>
      <button
        className="text-gray-300 hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        {title}
        <svg className="w-3 h-3 fill-current text-gray-400 cursor-pointer ml-1 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-gray-800 border border-gray-700 py-1.5 rounded shadow-lg overflow-hidden mt-1">
          <ul>
            {children}
          </ul>
        </div>
      </Transition>
    </div>
  );
}
