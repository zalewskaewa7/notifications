import { configureStore } from '@reduxjs/toolkit'
import markAsReadReducer from '../features/markAsReadReducer'

export default configureStore({
  reducer: {
    readed: markAsReadReducer
  }
})