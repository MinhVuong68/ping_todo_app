import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { UserState } from './type'
import { LoginPayLoad } from '@/services/types'
import Api from '@/services/Api'

const api = Api.create()

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {},
    token: null,
  } as UserState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { token, ...profile }: any = action.payload
      if (token) {
        state.token = token
      }
      state.profile = profile
    })
  }
})

export const login = createAsyncThunk(
  'user/login',
  async (userLogin: LoginPayLoad, thunkAPI) => {
    try {
      const res = await api.login(userLogin)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)



export default userSlice.reducer
