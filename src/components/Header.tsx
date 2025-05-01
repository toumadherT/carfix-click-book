
import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onContactClick?: () => void;
  onHomeClick?: () => void;
}

const Header = ({ onContactClick, onHomeClick }: HeaderProps) => {
  return (
    <header className="w-full h-20 md:h-28 fixed top-0 left-0 z-50">
      <div className="w-full h-full bg-black bg-opacity-75 border border-black flex items-center justify-between px-4 md:px-8 lg:px-12">
        <div className="flex items-center">
          <img
            className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28" 
            src="/images/Renault logo.png"
            alt="Renault Logo"
          />
          <h1 className="hidden sm:block text-white text-lg md:text-2xl lg:text-3xl font-bold font-['Inria_Serif'] ml-2">
            Renault CarFix by TT
          </h1>
        </div>
        
        <nav className="flex items-center space-x-4 md:space-x-8 lg:space-x-12">
          <a 
            onClick={onHomeClick} 
            className="text-sky-400 text-sm md:text-xl lg:text-3xl font-normal font-['Inria_Serif'] cursor-pointer"
          >
            Home
          </a>
          <a 
            onClick={onContactClick}
            className="text-white hover:text-sky-400 transition-colors text-sm md:text-xl lg:text-3xl font-normal font-['Inria_Serif'] cursor-pointer"
          >
            Contact us
          </a>
          <Link to="/about" className="text-white hover:text-sky-400 transition-colors text-sm md:text-xl lg:text-3xl font-normal font-['Inria_Serif']">
            About us
          </Link>
          <Link to="/login" className="text-white hover:text-sky-400 transition-colors text-sm md:text-xl lg:text-3xl font-normal font-['Inria_Serif']">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
