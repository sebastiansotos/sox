import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 1100); 
    return () => clearTimeout(timer);
  }, []);

  const irAProductos = () => {
    const seccion = document.getElementById('productos');
    seccion?.scrollIntoView({ behavior: 'smooth' });
  };

  if (cargando) {
    return (
      <div className="loader-container">
        <img src="/Logo.svg" alt="Cargando..." className="logo-loading" />
      </div>
    );
  }

  return (
    <main style={{ width: '100%' }}>
      {/* SECCIÓN NEGRA HERO */}
      <section className="bg-hero-animado">
        
        <div style={{ textAlign: 'center' }}>
          <h1 className="titulo-glitch">𝘏𝘦𝘭𝘭𝘰, 𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘚𝘰𝘳𝘦𝘹</h1>
          <p style={{ color: 'white', marginTop: '15px', fontSize: '1.4rem', opacity: 0.8 }}>
            𝘓𝘢 𝘔𝘦𝘫𝘰𝘳 𝘳𝘰𝘱𝘢 𝘥𝘦 𝘝𝘦𝘯𝘦𝘻𝘶𝘦𝘭𝘢 🇻🇪
          </p>
        </div>

        <button className="boton-logo" onClick={irAProductos}>
          <img 
            src="/Logo.svg" 
            alt="Logo Sorex" 
            style={{ width: '280px', height: 'auto', display: 'block' }} 
          />
        </button>

      </section>

      {/* SECCIÓN PRODUCTOS BLANCA */}
      <section id="productos" className="seccion-productos">
        <h2 style={{ color: '#000', fontSize: '2.5rem' }}>Catálogo Próximamente...</h2>
      </section>
    </main>
  );
}

export default App;
