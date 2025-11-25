import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import ProductModal from './components/ProductModal';
import Background3D from './components/Background3D';
import { Category, ViewState, Product } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [category, setCategory] = useState<Category>('women');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCategorySelect = (cat: Category) => {
    setCategory(cat);
    setView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAbout = () => {
    setView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white font-sans relative">
      {/* 3D Background Layer */}
      <Background3D />

      {/* UI Layer */}
      <div className="relative z-10 min-h-screen flex flex-col p-6 md:p-12">
        <Navbar 
          onNavigateHome={handleNavigateHome} 
          onNavigateAbout={handleNavigateAbout}
          onSelectCategory={handleCategorySelect} 
        />

        {view === 'home' && <Hero />}
        
        {view === 'catalog' && (
          <Catalog 
            activeCategory={category} 
            onBack={handleNavigateHome}
            onProductClick={setSelectedProduct}
          />
        )}

        {view === 'about' && <About />}

        {/* Footer */}
        <footer className="flex justify-between items-end pointer-events-auto mt-auto pt-12 border-t border-white/5">
          <div className="text-xs text-gray-500 font-mono">
            LAT: 40.7128° N <br />
            LNG: 74.0060° W
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </footer>
      </div>

      {/* Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default App;