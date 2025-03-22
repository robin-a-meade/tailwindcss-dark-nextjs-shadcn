'use client';
import React from 'react';

const DarkModeToggle: React.FC = () => {
  const toggleDarkMode = (): void => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
    } else {
      htmlElement.classList.add('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
