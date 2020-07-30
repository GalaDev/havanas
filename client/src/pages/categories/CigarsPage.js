import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productActions';

const CigarPage = (props) => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {};
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <h2>Cigars</h2>
      <ul className='products'>
        {products.map((product, i) => {
          if (product.category === 'cigars') {
            return (
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
            );
          }
        })}
      </ul>
    </div>
  );
};

export default CigarPage;
