import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './srcSlice'
import  RealSlice  from './RealSlice'



export default configureStore({
  reducer: {
    proId:counterSlice,
    SrcId:RealSlice,

  },
})