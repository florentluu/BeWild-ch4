import React, { Component }  from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {

  return(
    <div>
      <BrowserRouter>
      <Header /> 
      <Home />
      <Route exact path="/" />
      <Route path="/product/" />

      <Footer /> 
      </BrowserRouter>
    </div>
  );
}
export default App;
