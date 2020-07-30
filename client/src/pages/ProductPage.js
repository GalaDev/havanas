import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

const ProductPage = (props) => {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {};
  }, []);

  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };

  return (
    <div>
      {product ? (
        <div>
          {loading ? (
            'Loading...'
          ) : (
            <div>
              <div className='back-to-result'>
                <Link to='/'>Back to Home Page</Link>
                <br />
                <Link to={'/' + product.category}>
                  Back to
                  {' ' +
                    product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)}
                </Link>
              </div>
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                <div className='details'>
                  <div className='details-image'>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className='details-action'>
                    <ul>
                      <li>
                        <div className='details-info'>
                          <ul>
                            <li>
                              <h4>{product.name}</h4>
                            </li>
                            <li>
                              Price: <b>${product.price}</b>
                            </li>
                            <li>
                              <div>Description: {product.description}</div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        Quantity:{' '}
                        <select
                          value={qty}
                          onChange={(e) => {
                            setQty(e.target.value);
                          }}
                        >
                          {[...Array(product.stock).keys()].map((count, i) => (
                            <option key={i + 1} value={count + 1}>
                              {count + 1}
                            </option>
                          ))}
                        </select>
                      </li>
                      <li>
                        {product.stock <= 0 ? (
                          <button disabled className='button-disabled'>
                            Out of Stock...
                          </button>
                        ) : (
                          <button onClick={handleAddToCart} className='button'>
                            Add to Cart
                          </button>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default ProductPage;
