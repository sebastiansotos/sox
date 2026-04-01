import './App.css'

function App() {
  // Función para bajar suavemente a la sección de productos
  const irAProductos = () => {
    const seccion = document.getElementById('productos');
    seccion?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* SECCIÓN PRINCIPAL (HERO) */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',    
        justifyContent: 'center', 
        minHeight: '100vh',      
        backgroundColor: '#1a1a1a', 
        color: 'white',          
        margin: 0,
        padding: '20px'
      }}>
        
        <h1 style={{ marginBottom: '10px' }}>𝘏𝘦𝘭𝘭𝘰, 𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘚𝘰𝘳𝘦𝘹</h1>
        <p style={{ marginBottom: '40px' }}>𝘓𝘢 𝘔𝘦𝘫𝘰𝘳 𝘳𝘰𝘱𝘢 𝘥𝘦 𝘝𝘦𝘯𝘦𝘻𝘶𝘦𝘭𝘢 🇻🇪, 𝘙𝘦𝘱𝘳𝘦𝘴𝘦𝘯𝘵𝘢𝘯𝘥𝘰 𝘮𝘪 𝘗𝘢í𝘴</p> 
        
        {/* El Logo convertido en Botón */}
        <button className="boton-logo" onClick={irAProductos} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
          <img 
            src="/Logo.svg" 
            alt="Logo Sorex" 
            style={{ 
              maxWidth: '300px', 
              height: 'auto',
              display: 'block'
            }} 
          />
        </button>
      </div>

      {/* SECCIÓN DE PRODUCTOS (Aparece al bajar) */}
      <div id="productos" style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f4f4f4', 
        color: '#333', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <h2 style={{ marginBottom: '40px', color:'#000000' }}>Catálogo de Productos Próximamente...</h2>
      </div>
    </div>
  )
}

export default App;
