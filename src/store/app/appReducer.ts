import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './type'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    toast: {
      message: '',
      latestShowDate: 0,
    },
  } as AppState,
  reducers: {
    showToast: (
      state,
      { payload: { message } }: { payload: { message: string } },
    ) => {
      if (message) {
        state.toast = {
          message: message,
          latestShowDate: new Date().getMilliseconds(),
        }
      }
    },
  },
})

export const { showToast } = appSlice.actions
export default appSlice.reducer
