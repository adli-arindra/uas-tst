"use client";
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white fixed top-0 left-0 h-full">
      <aside className="w-64 min-h-screen bg-gradient-to-b from-primary to-secondary text-white sticky top-0">
        <div className="p-6 text-2xl font-bold border-b border-gray-700 sticky top-0 bg-primary z-10">
          TRICH API Documentation
        </div>
        <nav className="overflow-y-auto">
          <ul>
            <li>
              <hr className="border-secondary border-1" />
              <Link href="#overview" className="block px-4 py-2 hover:bg-secondary">
                Overview
              </Link>
            </li>
            <li>
              <hr className="border-secondary border-1" />
              <Link href="#getstarted" className="block px-4 py-2 hover:bg-secondary">
                Get Started
              </Link>
            </li>
            <li>
              <hr className="border-secondary border-1" />
              <button
                onClick={toggleDropdown}
                className="flex justify-between items-center w-full px-4 py-2 hover:bg-secondary"
              >
                REST APIs
                <svg
                  className={`w-5 h-5 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 pl-8 space-y-2">
                  <li>
                    <Link href="#restapi" className="block px-4 py-2 hover:bg-secondary">
                      GET TOKEN
                    </Link>
                  </li>
                  <li>
                    <Link href="#restapi" className="block px-4 py-2 hover:bg-secondary">
                      POST PREDICT
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
