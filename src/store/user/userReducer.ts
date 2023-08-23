import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { UserState } from './type'
import { LoginPayLoad, RegisterPayload } from '@/services/types'
import Api, { setApiAccessToken } from '@/services/Api'
import { navigate } from '@/navigators/utils'

const api = Api.create()

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {},
    token: null,
  } as UserState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { token, ...profile }: any = action.payload
        if (token) {
          state.token = token
        }
        state.profile = profile
      })
      .addCase(register.fulfilled, (state, action) => {
        const { token, ...profile }: any = action.payload
        if (token) {
          state.token = token
        }
        state.profile = profile
      })
  },
})

export const register = createAsyncThunk(
  'user/register',
  async (userRegister: RegisterPayload, thunkAPI) => {
    try {
      const res = await api.register(userRegister)
      setApiAccessToken(res?.token)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const login = createAsyncThunk(
  'user/login',
  async (userLogin: LoginPayLoad, thunkAPI) => {
    try {
      const res = await api.login(userLogin)
      setApiAccessToken(res?.token)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export default userSlice.reducer
