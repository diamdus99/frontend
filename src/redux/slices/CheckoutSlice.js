// redux/slices/CheckoutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addToCheckout: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCheckout: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCheckout: (state) => {
      state.items = [];
    },
  },
});

export const { addToCheckout, removeFromCheckout, clearCheckout } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
