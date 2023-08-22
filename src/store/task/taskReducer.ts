import Api from '@/services/Api'
import { GetTasksPayload, TaskItem } from '@/services/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const api = Api.create()

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTasks.fulfilled, (state: any, action) => {
        state.tasks = action.payload
      })
      .addCase(createTask.fulfilled, (state: any, action) => {
        state.tasks = [...state.tasks, action.payload]
      })
      .addCase(updateTaskName.fulfilled, (state: any, action) => {
        state.tasks = state.tasks.map((task: any) => {
          if (task.id === action.payload.id) {
            return action.payload
          }
          return task
        })
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(
          (item: any) => item.id !== action.payload.id,
        )
      })
  },
})

export const createTask = createAsyncThunk(
  'task/create',
  async (taskITem: TaskItem, thunkAPI) => {
    try {
      const res: any = await api.createTask(taskITem)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const getTasks = createAsyncThunk(
  'task/gets',
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
  'task/updateStatus',
  async (payload: number, thunkAPI) => {
    try {
      const res = await api.updateTaskStatus(payload)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const updateTaskName = createAsyncThunk(
  'task/updateTaskName',
  async (payload: { taskId: number; taskName: string }, thunkAPI) => {
    try {
      const res: any = await api.updateTaskName(payload)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const deleteTask = createAsyncThunk(
  'task/delete',
  async (taskId: number, thunkAPI) => {
    try {
      const res: any = await api.deleteTask(taskId)
      return res
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export default taskSlice.reducer
