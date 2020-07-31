import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import { detailsProduct } from '../actions/productActions';
import { removeFromCart } from '../actions/cartActions';

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
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };

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
              <br />
              <li>
                <h3>Shopping Cart</h3>
                <div>Price:</div>
              </li>

              {cartItems.length === 0 ? (
                <li>Cart is Empty</li>
              ) : (
                cartItems.map((item, i) => (
                  <li key={i}>
                    <div className='cart-image'>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className='cart-name'>
                      <div>{item.name}</div>
                    </div>
                    <div className='cart-price'>${item.price}</div>
                    <button
                      type='button'
                      className='button'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Remove
                    </button>
                  </li>
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
              onClick={checkoutHandler}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  );
};

export default CartPage;
