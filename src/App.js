import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/ShopPage';

function App() {
  return (
    <div >
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
