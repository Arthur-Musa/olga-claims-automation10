"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar no carregamento inicial
    checkIfMobile();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkIfMobile);
    
    // Limpar listener ao desmontar
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Fechar sidebar ao clicar fora em dispositivos móveis
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isMobile && sidebarOpen && !target.closest('.sidebar-container')) {
        setSidebarOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, sidebarOpen]);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sidebar para desktop ou móvel quando aberto */}
      <div className={`sidebar-container ${isMobile ? 'fixed inset-0 z-50' : 'flex'}`}>
        {isMobile && sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
        )}
        
        <div 
          className={`
            ${isMobile ? 'fixed left-0 top-0 bottom-0 z-50 transition-transform duration-300 ease-in-out transform' : ''}
            ${isMobile && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'}
          `}
        >
          <Sidebar currentPath={''} />
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <div className={`flex flex-col ${isMobile ? 'w-full' : 'ml-64'}`}>
        <Header 
          showMenuButton={isMobile} 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-br from-gray-900 to-gray-800">
          {children}
        </main>
      </div>
    </div>
  );
};

export { DashboardLayout };
