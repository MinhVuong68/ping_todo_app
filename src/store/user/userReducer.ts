import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { UserState } from './type'
import { GetTasksPayload, LoginPayLoad } from '@/services/types'
import Api, { setApiAccessToken } from '@/services/Api'

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
  },
})

export const login = createAsyncThunk(
  'user/login',
  async (userLogin: LoginPayLoad, thunkAPI) => {
    try {
      const res: any = await api.login(userLogin)
      setApiAccessToken(res?.token)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const getTasks = createAsyncThunk(
  'user/task',
  async (payload: GetTasksPayload, thunkAPI) => {
    try {
      const res = await api.getTasks(payload)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const updateTaskStatus = createAsyncThunk(
  'user/task',
  async (payload: number, thunkAPI) => {
    try {
      const res = await api.updateTaskStatus(payload)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export default userSlice.reducer
