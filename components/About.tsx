import React from 'react';

const About: React.FC = () => {
  const values = [
    {
      icon: "fa-fingerprint",
      title: "Autenticidad",
      desc: "Creemos en expresar el estilo propio sin miedo ni filtros."
    },
    {
      icon: "fa-map-location-dot",
      title: "Orgullo Peruano",
      desc: "Diseño urbano con raíces locales y visión global."
    },
    {
      icon: "fa-gem",
      title: "Calidad",
      desc: "Prendas estéticas y duraderas que respetan tu inversión."
    },
    {
      icon: "fa-bolt",
      title: "Actitud",
      desc: "Moda con carácter para quienes quieren destacar."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto pb-20 pointer-events-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold uppercase tracking-wider mb-6">
          <i className="fa-solid fa-users"></i> Nosotros
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-4">
          Más que Ropa.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          La historia detrás de Calato No.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Misión */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300">
              <i className="fa-solid fa-rocket text-xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-white">Misión</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            Brindar a los peruanos prendas modernas, accesibles y con actitud, que los inspiren a sentirse seguros, auténticos y guapos todos los días. En <strong>TU CALATO NO</strong> diseñamos moda que refleja el estilo urbano peruano, creando ropa cómoda, estética y de calidad para quienes quieren destacar sin perder su esencia.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300">
              <i className="fa-solid fa-eye text-xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-white">Visión</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            Convertirnos en la marca peruana líder en moda urbana, reconocida por empoderar a las personas a expresar su estilo sin miedo. Aspiramos a expandir <strong>TU CALATO NO</strong> a nivel nacional e internacional, siendo una referencia de diseño creativo, accesibilidad y orgullo peruano.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Valores de Marca</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-xl text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center mb-4 shadow-lg">
                <i className={`fa-solid ${val.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
              <p className="text-sm text-gray-400">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;