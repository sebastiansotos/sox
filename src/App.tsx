import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Tiempo reducido a 1.1 segundos para que sea veloz
    const timer = setTimeout(() => {
      setCargando(false);
    }, 1100); 
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
    <div style={{ width: '100%' }}>
      {/* SECCIÓN HERO SIN BORDES */}
      <div className="bg-hero-animado">
        <h1 className="titulo-glitch" style={{ marginBottom: '10px' }}>
          𝘏𝘦𝘭𝘭𝘰, 𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘚𝘰𝘳𝘦𝘹
        </h1>

        <p style={{ marginBottom: '40px', color: 'white', textAlign: 'center', padding: '0 20px' }}>
          𝘓𝘢 𝘔𝘦𝘫𝘰𝘳 𝘳𝘰𝘱𝘢 𝘥𝘦 𝘝𝘦𝘯𝘦𝘻𝘶𝘦𝘭𝘢 🇻🇪, 𝘙𝘦𝘱𝘳𝘦𝘴𝘦𝘯𝘵𝘢𝘯𝘥𝘰 𝘮𝘪 𝘗𝘢í𝘴
        </p> 
        
        <button className="boton-logo" onClick={irAProductos}>
          <img 
            src="/Logo.svg" 
            alt="Logo Sorex" 
            style={{ maxWidth: '300px', width: '90%', height: 'auto' }} 
          />
        </button>
      </div>

      {/* SECCIÓN DE PRODUCTOS */}
      <div id="productos" className="seccion-productos">
        <h2 style={{ color: '#000', fontSize: '2rem' }}>Catálogo Próximamente...</h2>
      </div>
    </div>
  );
}

export default App;
