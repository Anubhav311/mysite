import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './components/home/home';
import About from './components/about/about';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        {/* <Route path='/projects' component={Projects}/> */}
      </div>
    </Router>
  );
}

export default App;
