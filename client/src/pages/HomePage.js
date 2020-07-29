import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const HomePage = (props) => {
  return (
    <div>
      <h2>Featured Products</h2>
      <ul className='products'>
        {data.products.map((product, i) => (
          <li key={i}>
            <div className='product'>
              <Link to={'/product/' + product._id}>
                <img
                  className='product-image'
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              <div className='product-name'>
                <Link to={'/product/' + product._id}>{product.name}</Link>
              </div>
              <div className='product-brand'>{product.brand}</div>
              <div className='product-price'>${product.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
