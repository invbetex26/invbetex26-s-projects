import React from 'react';

const Hero: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-8 pointer-events-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider animate-pulse">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            v2.0 Próximamente
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Ponte Guapo.
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-md">
            ¿Para qué conformarte con un calato, si puedes tener un outfit que marque tu estilo? Ponte guapo y llama.
          </p>

          <div className="pt-8 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="User" className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zack" alt="User" className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
            </div>
            <p>Con la confianza de +10,000 clientes</p>
          </div>
        </div>

        <div className="lg:col-span-7 h-64 lg:h-auto flex items-end justify-end pointer-events-none lg:pointer-events-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-xs hidden lg:block transform hover:scale-105 transition-transform duration-300 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <i className="fa-solid fa-cube text-white"></i>
              </div>
              <span className="text-xs font-mono text-gray-400">SINCRONIZADO</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Enfoque Espacial</h3>
            <p className="text-sm text-gray-400 mb-4">Arrastra el fondo para explorar.</p>
            <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;