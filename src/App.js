import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";
const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={About} />
    <Route path="/about" component={Home} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default App;
