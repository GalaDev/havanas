import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const ProductPage = (props) => {
  const { id } = props.match.params;
  const product = data.products.filter((item) => item._id === parseInt(id))[0];

  return (
    <div className='details'>
      <div>
        <Link to='/'>Back to Home Page</Link>
      </div>
      <div className='details-image'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='details-info'>
        <ul>
          <li>
            <h4>{product.name}</h4>
          </li>
          <li>
            <b>{product.price}</b>
          </li>
          <li>
            Description:
            <div>{product.description}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
