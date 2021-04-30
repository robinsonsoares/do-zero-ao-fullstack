import React from 'react'

// Global Style
import GlobalStyle from './components/GlobalStyle'

// Components
import AboutUs from './pages/AboutUs'

// const leDados = ( ) => {
//   fetch('/api')
//   .then(resultado => {
//     console.log("Dados do backend", resultado)
//   })
// }

function App() {
  return (
    <div>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
