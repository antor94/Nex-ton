import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './srcSlice'
import  RealSlice  from './RealSlice'
import  Cartslice  from './Cartslice'



export default configureStore({
  reducer: {
    proId:counterSlice,
    SrcId:RealSlice,
    cartData:Cartslice

  },
})