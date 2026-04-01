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
             𝘋𝘦𝘴𝘪𝘨𝘯𝘴 𝘧𝘰𝘳 𝘵𝘩𝘰𝘴𝘦 𝘸𝘩𝘰 𝘥𝘰 𝘯𝘰𝘵 𝘴𝘦𝘦𝘬 𝘵𝘰 𝘦𝘯𝘤𝘢𝘮𝘱, 𝘪𝘧 𝘯𝘰𝘵 𝘵𝘰 𝘥𝘰𝘮𝘪𝘯𝘢𝘵𝘦. 𝘐𝘧 𝘺𝘰𝘶'𝘳𝘦 𝘯𝘰𝘵 𝘸𝘪𝘭𝘭𝘪𝘯𝘨 𝘵𝘰 𝘳𝘪𝘴𝘬 𝘦𝘷𝘦𝘳𝘺𝘵𝘩𝘪𝘯𝘨, 𝘥𝘰𝘯'𝘵 𝘦𝘷𝘦𝘯 𝘵𝘳𝘺.
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
