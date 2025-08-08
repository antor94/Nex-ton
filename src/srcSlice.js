import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: null,
  },
  reducers: {
productNameReducer: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {productNameReducer } = counterSlice.actions

export default counterSlice.reducer