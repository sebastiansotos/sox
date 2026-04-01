import './App.css'


function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', // Texto arriba, imagen abajo
      alignItems: 'center',    // Centrado horizontal exacto
      justifyContent: 'center', // Centrado vertical exacto
      minHeight: '100vh',      // Toda la altura de la pantalla
      backgroundColor: '#1a1a1a', // Fondo oscuro para que resalte el blanco
      color: 'white',          // Todo el texto blanco
      margin: 0,
      padding: '20px'
    }}>
      
      {/* Texto arriba */}
      <h1 style={{ marginBottom: '30px' }}>
        𝘓𝘢 𝘔𝘦𝘫𝘰𝘳 𝘳𝘰𝘱𝘢 𝘥𝘦 𝘝𝘦𝘯𝘦𝘻𝘶𝘦𝘭𝘢 🇻🇪 
      </h1>
      
      {/* Logo en el centro */}
      <img 
        src="/Logo.svg" 
        alt="Logo Sorex" 
        style={{ 
          maxWidth: '300px', // Ajusta el tamaño a tu gusto
          height: 'auto',
          display: 'block'
        }} 
      />
      
    </div>
  )
}

export default App;
