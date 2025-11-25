import React, { useEffect } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!product) return null;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = product.fallbackImg || 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white/5 backdrop-blur-xl border border-white/10 w-full max-w-4xl rounded-2xl overflow-hidden relative flex flex-col md:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 transition-colors cursor-pointer"
        >
          <i className="fa-solid fa-times"></i>
        </button>
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-[500px] relative bg-gray-900">
          <img 
            src={product.img} 
            alt={product.title}
            onError={handleImageError}
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">{product.category}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.title}</h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">{product.desc}</p>
          
          <div className="mt-auto border-t border-white/10 pt-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">Precio Total</span>
              <span className="text-3xl font-bold text-white">{product.price}</span>
            </div>
            <button className="w-full bg-white text-black px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors transform hover:scale-[1.02] active:scale-95 duration-200">
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
      {/* Close on click outside */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default ProductModal;