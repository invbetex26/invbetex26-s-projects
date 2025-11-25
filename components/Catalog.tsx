import React from 'react';
import { Product, Category } from '../types';
import { products } from '../data/products';

interface CatalogProps {
  activeCategory: Category;
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

const Catalog: React.FC<CatalogProps> = ({ activeCategory, onBack, onProductClick }) => {
  const categoryProducts = products[activeCategory];
  
  let title = 'Colección';
  if (activeCategory === 'men') title = 'Colección Hombres';
  else if (activeCategory === 'women') title = 'Colección Mujeres';
  else if (activeCategory === 'accessories') title = 'Accesorios Exclusivos';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallback?: string) => {
    e.currentTarget.src = fallback || 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80';
  };

  return (
    <section className="w-full max-w-7xl mx-auto pb-20 pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <button 
          onClick={onBack} 
          className="flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i> Volver
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.map((item) => (
          <div 
            key={item.id} 
            className="bg-white/5 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden group flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => onProductClick(item)}
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={item.img} 
                alt={item.title} 
                onError={(e) => handleImageError(e, item.fallbackImg)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="text-xs text-indigo-300 uppercase font-bold tracking-wider mb-1">{item.category}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <div className="mt-auto pt-4">
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;