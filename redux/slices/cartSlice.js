//Create a Slice
//Create a reducers

const { createSlice } = require("@reduxjs/toolkit");

//export reducer and reducers
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Your logic for addToCart
    },
    removeFromCart: (state, action) => {
      // Your logic for removeFromCart
    },
    incrementQty: (state, action) => {
      // Your logic for incrementQty
    },
    decrementQty: (state, action) => {
      // Your logic for decrementQty
    },
  },
});
