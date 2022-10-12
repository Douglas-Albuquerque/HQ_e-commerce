import { configureStore } from '@reduxjs/toolkit'
import userReducer from './cardSlice'


export default configureStore({
  reducer: {
    user: userReducer,
  }
})