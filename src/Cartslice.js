import { createSlice } from '@reduxjs/toolkit'

export const Cartslice = createSlice({
  name: 'counter',
  initialState: {
    value: null,
    cartItems:JSON.parse(localStorage.getItem('productID')) || null,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
        addToCart: (state, action) => {
      state.cartItems = action.payload
    },
  },
})

export const { incrementByAmount ,addToCart } = Cartslice.actions

export default Cartslice.reducer