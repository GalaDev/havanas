import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import data from './data';

function App() {
  return (
    <Router>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <a href='index.html'>Havanas</a>
          </div>
          <div className='header-links'>
            <div className='categories'>
              <button className='dropbtn'>Categories</button>
              <div className='categories-content'>
                <li className='cigars'>
                  <a href='#'>Cigars</a>
                </li>
                <li className='lighters'>
                  <a href='#'>Lighters</a>
                </li>
                <li className='wrappers'>
                  <a href='#'>Wrappers</a>
                </li>
              </div>
            </div>
            <a href='signin.html'>Sign-In</a>
            <a href='cart.html'>Cart</a>
          </div>
        </header>
        <main className='main'>
          <h2>Featured Products</h2>
          <div className='content'>
            <Route path='/product/:id' component={ProductPage}></Route>
            <Route path='/' exact={true} component={HomePage}></Route>
            <ul className='products'>
              {data.products.map(
                (product) =>
                  product.rank < 5 && (
                    <li>
                      <div className='product'>
                        <img
                          className='product-image'
                          src={product.image}
                          alt={product.name}
                        />
                        <div className='product-name'>
                          <a href='product.html'>{product.name}</a>
                        </div>
                        <div className='product-brand'>{product.brand}</div>
                        <div className='product-price'>${product.price}</div>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        </main>
        <footer className='footer'>All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
