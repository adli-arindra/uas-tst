"use client"
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white">
        <aside className="w-64 min-h-full bg-primary text-white rounded-r-xl">
            <div className="p-6 text-2xl font-bold border-b border-gray-700">
                API Documentation
            </div>
            <nav>
                <ul>
                    <li>
                        <hr className='border-secondary border-1'/>
                        <Link href="/api-docs" className="block px-4 py-2 hover:bg-secondary">
                        Overview
                        </Link>
                    </li>
                    <li>
                        <hr className='border-secondary border-1'/>
                        <button
                        onClick={toggleDropdown}
                        className="flex justify-between items-center w-full px-4 py-2 hover:bg-secondary"
                        >
                        Endpoints
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
                            <Link href="/api-docs#haircut" className="block px-4 py-2 hover:bg-secondary">
                                Haircut Endpoint
                            </Link>
                            </li>
                            <li>
                            <Link href="/api-docs#error-responses" className="block px-4 py-2 hover:bg-secondary">
                                Error Responses
                            </Link>
                            </li>
                        </ul>
                        )}
                    </li>
                    <li>
                        <hr className='border-secondary border-1'/>
                        <Link href="/api-docs#faq" className="block px-4 py-2 hover:bg-secondary">
                        FAQ
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>

    </div>
  );
};

export default Sidebar;
