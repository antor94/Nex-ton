import { createSlice } from '@reduxjs/toolkit'

export const RealSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    SrcElement: (state, action) => {
      state.value += action.payload
    },
  },
})

export const {  SrcElement } = RealSlice.actions

export default RealSlice.reducer