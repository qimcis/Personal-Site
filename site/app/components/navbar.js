'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <div className="md:hidden p-4">
        <button
          onClick={toggleMenu}
          className="text-black hover:text-gray-500"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex flex-col space-y-4 p-4 text-black">
            <a className="hover:text-gray-500 text-xl font-semibold" href="/" onClick={toggleMenu}>
              home
            </a>
            <a className="hover:text-gray-500 text-xl font-semibold" href="/about" onClick={toggleMenu}>
              about
            </a>
            <a className="hover:text-gray-500 text-xl font-semibold" href="/art" onClick={toggleMenu}>
              art
            </a>
            <a 
              className="hover:text-gray-500 text-xl font-semibold" 
              target="_blank" 
              href="https://drive.google.com/file/d/12WlqVicwMGoYdqDB2YzovPbv699Iwvj8/view?usp=sharing"
              onClick={toggleMenu}
            >
              cv
            </a>
          </div>
        </div>
      )}

      <div className="hidden md:flex flex-row text-black justify-center p-5 space-x-20 text-2xl font-semibold mx-10">
        <a className="hover:text-gray-500" href="/">home</a>
        <a className="hover:text-gray-500" href="/about">about</a>
        <a className="hover:text-gray-500" href="/art">art</a>
        {/* <a 
          className="hover:text-gray-500" 
          target="_blank" 
          href="https://drive.google.com/file/d/12WlqVicwMGoYdqDB2YzovPbv699Iwvj8/view?usp=sharing"
        >
          cv
        </a> */}
      </div>
    </nav>
  );
}