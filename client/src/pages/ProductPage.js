import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const ProductPage = (props) => {
  const { id } = props.match.params;
  const product = data.products.filter((item) => item._id === parseInt(id))[0];
  const { category, image, name, price, description, status } = product;

  return (
    <div>
      <div className='back-to-result'>
        <Link to='/'>Back to Home Page</Link>
        <br />
        <Link to={'/' + category}>
          Back to
          {' ' + category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      </div>
      <div className='details'>
        <div className='details-image'>
          <img src={image} alt={name} />
        </div>

        <div className='details-action'>
          <ul>
            <li>
              <div className='details-info'>
                <ul>
                  <li>
                    <h4>{name}</h4>
                  </li>
                  <li>
                    Price: <b>${price}</b>
                  </li>
                  <li>
                    Description:
                    <div>{description}</div>
                  </li>
                </ul>
              </div>
            </li>
            <li>Status: {status}</li>
            <li>
              Quantity:{' '}
              <select name='' id=''>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </li>
            <li>
              <button className='button'>Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
