import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = (props) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProduct(data);
    };
    fetchData();
    return () => {};
  }, []);

  return (
    <div>
      <h2>Featured Products</h2>
      <ul className='products'>
        {products.map((product, i) => (
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
