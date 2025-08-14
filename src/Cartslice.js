import { createSlice } from '@reduxjs/toolkit'

export const Cartslice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = Cartslice.actions

export default Cartslice.reducer