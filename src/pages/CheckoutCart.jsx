// components/CheckoutCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCheckout,
  clearCheckout,
} from '../redux/slices/CheckoutSlice';

const CheckoutCart = () => {
  const checkoutItems = useSelector((state) => state.checkout.items);
  const dispatch = useDispatch();

  const handleRemoveFromCheckout = (item) => {
    dispatch(removeFromCheckout(item));
  };

  const handleClearCheckout = () => {
    dispatch(clearCheckout());
  };

  return (
    <div>
      <h2>Checkout Cart</h2>
      {/* {checkoutItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>${item.prices.price.toFixed(2)}</p>
          <button onClick={() => handleRemoveFromCheckout(item)}>
            Remove from Checkout
          </button>
        </div>
      ))}
      {checkoutItems.length === 0 && <p>Your checkout cart is empty.</p>}
      {checkoutItems.length > 0 && (
        <div>
          <button onClick={handleClearCheckout}>Clear Checkout</button>
        </div>
      )} */}
    </div>
  );
};

export default CheckoutCart;
