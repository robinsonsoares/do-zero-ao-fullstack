import React from 'react'

// Global Style
import GlobalStyle from './components/GlobalStyle'

//Roteamento
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio'
import ContactMe from './pages/ContactMe'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contactme">
            <ContactMe />
          </Route>          
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
