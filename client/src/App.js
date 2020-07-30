import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CigarsPage from './pages/categories/CigarsPage';
import LightersPage from './pages/categories/LightersPage';
import WrappersPage from './pages/categories/WrappersPage';

function App() {
  return (
    <Router>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <Link to='/'>Havanas</Link>
          </div>
          <div className='header-links'>
            <div className='categories'>
              <button className='dropbtn'>Categories</button>
              <div className='categories-content'>
                <li className='cigars'>
                  <Link to='/cigars'>Cigars</Link>
                </li>
                <li className='lighters'>
                  <Link to='/lighters'>Lighters</Link>
                </li>
                <li className='wrappers'>
                  <Link to='/wrappers'>Wrappers</Link>
                </li>
              </div>
            </div>
            <a href='signin.html'>Sign-In</a>
            <a href='cart.html'>Cart</a>
          </div>
        </header>
        <main className='main'>
          <div className='content'>
            <Route path='/product/:id' component={ProductPage}></Route>
            <Route path='/' exact={true} component={HomePage}></Route>
            <Route path='/cigars' exact={true} component={CigarsPage}></Route>
            <Route
              path='/lighters'
              exact={true}
              component={LightersPage}
            ></Route>
            <Route
              path='/wrappers'
              exact={true}
              component={WrappersPage}
            ></Route>
            <Route path='/cart/:id?' exact={true} component={CartPage}></Route>
          </div>
        </main>
        <footer className='footer'>All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
