import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CigarsPage from './pages/categories/CigarsPage';
import LightersPage from './pages/categories/LightersPage';
import WrappersPage from './pages/categories/WrappersPage';
import { useSelector, useDispatch } from 'react-redux';
import { CART_REMOVE_ITEM } from './constants/cartConstants';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  const cartDataFunc = (cartItems) => {
    if (cartItems.length) {
      return cartItems[0].product;
    }
    return 0;
  };

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

            <Link to={'/cart/' + cartDataFunc(cartItems)}>Cart</Link>
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
