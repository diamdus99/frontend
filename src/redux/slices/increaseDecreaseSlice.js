// increaseDecreaseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const increaseDecreaseSlice = createSlice({
  name: 'increaseDecrease',
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = increaseDecreaseSlice.actions;
export default increaseDecreaseSlice.reducer;
