function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', // Alinea los elementos uno arriba del otro
      alignItems: 'center',    // Centra horizontalmente
      justifyContent: 'center', // Centra verticalmente en toda la pantalla
      height: '100vh',         // Ocupa el 100% de la altura del navegador
      textAlign: 'center'
    }}>
      {/* El texto se queda arriba */}
      <h1>𝘓𝘢 𝘔𝘦𝘫𝘰𝘳 𝘳𝘰𝘱𝘢 𝘥𝘦 𝘝𝘦𝘯𝘦𝘻𝘶𝘦𝘭𝘢 🇻🇪</h1>
      <p>𝘓𝘢 𝘔𝘦𝘫𝘰𝘳 𝘳𝘰𝘱𝘢 𝘥𝘦 𝘝𝘦𝘯𝘦𝘻𝘶𝘦𝘭𝘢 🇻🇪, 𝘙𝘦𝘱𝘳𝘦𝘴𝘦𝘯𝘵𝘢𝘯𝘥𝘰 𝘮𝘪 𝘗𝘢í𝘴</p>
      
      {/* Tu logo en el medio */}
      <img 
        src="Logo.svg" 
        alt="Logo Sorex" 
        style={{ width: '200px', marginTop: '20px' }} 
      />
    </div>
  )
}
