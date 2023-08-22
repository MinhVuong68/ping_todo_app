import { configureStore } from '@reduxjs/toolkit'

import userReducer from './user/userReducer'
import { useDispatch } from 'react-redux'
import taskReducer from './task/taskReducer'
const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
