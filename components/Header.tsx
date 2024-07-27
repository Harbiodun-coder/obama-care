import React, { useState } from 'react';
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full bg-white top-0 left-0 shadow-lg z-50 pt-4 items-center">
      <div className="flex justify-between text-sm  gap-5 px-4 h-15 items-center">
        <div className="">
        <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="rounded-full mx-auto"
        layout="fixed"
      />
        </div>
        <div className="hidden md:flex">
          <ul className="flex justify-between gap-5 px-4">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>DEPARTMENT</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-[blue]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-5 px-4 pb-4">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>DEPARTMENT</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
      )}
    </div>
  );
}
