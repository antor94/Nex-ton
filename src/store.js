import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './srcSlice'


export default configureStore({
  reducer: {
    proId : counterSlice
  },
})