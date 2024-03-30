import React from 'react';

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <div className={`navbar ${darkMode ? 'dark-bg' : 'bg-red-500'}`}>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Agri-Diagonise</a>
        </div>
        <div className="flex-none">
          <div className="moon-icon" onClick={toggleDarkMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className={`inline-block w-5 h-5 stroke-current ${darkMode ? 'text-white' : 'text-gray-800'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 21l4.48-4.48M13 13a8 8 0 100-16 8 8 0 000 16zM13 13V3M6.3 6.3l1.4 1.4M3 13h5.6M10.9 20.7l1.4-1.4"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
