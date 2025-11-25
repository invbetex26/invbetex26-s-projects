import React from 'react';
import { Category } from '../types';

interface NavbarProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onSelectCategory: (category: Category) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onNavigateAbout, onSelectCategory }) => {
  return (
    <nav className="flex justify-between items-center w-full pointer-events-auto mb-8 z-50 relative">
      <div className="flex items-center gap-3 cursor-pointer group" onClick={onNavigateHome}>
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-colors">
          <i className="fa-solid fa-clock text-indigo-300"></i>
        </div>
        <span className="text-2xl font-bold tracking-tight text-white">Calato No</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <button 
          onClick={() => onSelectCategory('women')} 
          className="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
        >
          Mujeres
        </button>
        <button 
          onClick={() => onSelectCategory('men')} 
          className="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
        >
          Hombres
        </button>
        <button 
          onClick={() => onSelectCategory('accessories')} 
          className="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
        >
          Accesorios
        </button>
        <button 
          onClick={onNavigateAbout} 
          className="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
        >
          Nosotros
        </button>
      </div>

      <button className="hidden sm:flex bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/25 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white transition-all transform hover:-translate-y-0.5 group items-center">
        Comunicarte con Asesor
        <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
      </button>
    </nav>
  );
};

export default Navbar;