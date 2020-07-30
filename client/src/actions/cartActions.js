import { CART_ADD_ITEM } from '../constants/cartConstants.js';
import axios from 'axios';

const addToCart = (productId, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/products/' + productId);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        stock: data.stock,
        qty,
      },
    });
  } catch (err) {}
};

export { addToCart };
