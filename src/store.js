import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './srcSlice'
import  Cartslice  from './Cartslice'


export default configureStore({
  reducer: {
    proId : counterSlice,
    Id : Cartslice
  },
})