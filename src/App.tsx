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
             𝘋𝘪𝘴𝘦𝘯̃𝘰𝘴 𝘱𝘢𝘳𝘢 𝘲𝘶𝘪𝘦𝘯𝘦𝘴 𝘯𝘰 𝘣𝘶𝘴𝘤𝘢𝘯 𝘦𝘯𝘤𝘢𝘫𝘢𝘳, 𝘴𝘪𝘯𝘰 𝘥𝘰𝘮𝘪𝘯𝘢𝘳. 
             𝘚𝘵𝘰𝘤𝘬 𝘭𝘪𝘮𝘪𝘵𝘢𝘥𝘰, 𝘢𝘤𝘵𝘪𝘵𝘶𝘥 𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘢. 𝘚𝘪 𝘯𝘰 𝘷𝘢𝘴 𝘢 𝘱𝘰𝘳 𝘵𝘰𝘥𝘰, 𝘯𝘪 𝘭𝘰 𝘪𝘯𝘵𝘦𝘯𝘵𝘦𝘴.
             <strong> 𝘌𝘯𝘨𝘪𝘯𝘦𝘦𝘳𝘦𝘥 𝘧𝘰𝘳 𝘵𝘩𝘦 𝘦𝘭𝘪𝘵𝘦.</strong>
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
