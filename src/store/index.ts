import { configureStore } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'
import userReducer from './user/userReducer'
import taskReducer from './task/taskReducer'
import appReducer from './app/appReducer'
import { injectStore } from '@/services/Api'
const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
    app: appReducer
  },
})

injectStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
