"use client";

import React from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showMenuButton?: boolean;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Olga Claims Automation", 
  subtitle, 
  showMenuButton = false, 
  onMenuClick 
}) => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 py-3 px-4 md:py-4 md:px-6 mb-4 md:mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {showMenuButton && (
            <button 
              onClick={onMenuClick}
              className="mr-3 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          )}
          <div>
            <h1 className="text-lg md:text-xl font-bold gradient-text-purple">{title}</h1>
            {subtitle && <p className="text-gray-400 text-xs md:text-sm mt-1">{subtitle}</p>}
          </div>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Barra de busca - visível apenas em telas maiores */}
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6a11cb] w-48 lg:w-64"
            />
            <button className="absolute right-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          {/* Botão de busca para dispositivos móveis */}
          <button className="md:hidden text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
