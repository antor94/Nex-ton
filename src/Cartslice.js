import { createSlice } from '@reduxjs/toolkit'

export const Cartslice = createSlice({
  name: 'counter',
  initialState: {
    value: null,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { incrementByAmount } = Cartslice.actions

export default Cartslice.reducer