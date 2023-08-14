import { configureStore } from '@reduxjs/toolkit'

import userReducer from './user/userReducer'
import { useDispatch } from 'react-redux'
const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store