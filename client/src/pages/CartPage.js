import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import { detailsProduct } from '../actions/productActions';

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
      dispatch(detailsProduct(props.match.params.id));
    }
  }, []);

  return (
    <div>
      {product ? (
        <div className='cart'>
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
          <div className='cart-list'>
            <ul className='cart-list-container'>
              <li>
                <h3>Shopping Cart</h3>
                <div>Price:</div>
              </li>
              {cartItems.length === 0 ? (
                <div>Cart is Empty</div>
              ) : (
                cartItems.map((item) => (
                  <div>
                    <img src={item.image} alt={item.name} />
                    <div className='cart-name'>
                      <div>{item.name}</div>
                    </div>
                    ${item.price}
                  </div>
                ))
              )}
            </ul>
          </div>
          <div className='cart-action'>
            <h3>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}{' '}
              items) : ${' '}
              {cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}
            </h3>
            <button
              className='button primary'
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CartPage;
