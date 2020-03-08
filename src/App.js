import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route } from 'react-router-dom';

const HatsPage=()=>{
  return(<h1>HatsPage</h1>)
}

function App() {
  return (
    <div >
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/hats' component={HatsPage}/>
    
    </div>
  );
}

export default App;
