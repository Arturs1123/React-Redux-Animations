import { createSlice } from '@reduxjs/toolkit';

export const squaresSlice = createSlice({
  name: 'squares',
  initialState: [],
  reducers: {
    addSquare: (state) => {
      let color = Math.floor(Math.random() * 16777215).toString(16);
      console.log('color', color);
      const newSquare = {
        id: Date.now(),
        color: `#${ color === 'ffffff' ? Math.floor(Math.random() * 16777215).toString(16) : color }`,
      };
      state.unshift(newSquare);
    },
    deleteSquare: (state) => {
      state.pop();
    },
  },
});

export const { addSquare, deleteSquare } = squaresSlice.actions;

export default squaresSlice.reducer;
