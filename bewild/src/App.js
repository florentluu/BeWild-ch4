import React, { Component }  from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Music from './pages/Music';
import Fashion from './pages/Fashion';
import AllWilders from './pages/AllWilders';


function App() {

  return(
    <div>
      <BrowserRouter>
      <Header /> 
      <Route exact path="/" component={Home}/>
      <Route path="/contact/" component={Contact} />
      <Route path="/music/" component={Music} />
      <Route path="/fashion/" component={Fashion} />
      <Route path="/artists/" component={AllWilders} />
      <Footer /> 
      </BrowserRouter>
    </div>
  );
}
export default App;
