import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import apiConfig from '@/configs/apiConfig'
import {
  GetTasksPayload,
  LoginPayLoad,
  RegisterPayload,
  TaskItem,
} from './types'
import { navigateAndSimpleReset } from '@/navigators/utils'
import { showToast } from '@/store/app/appReducer'

let store: any
export const injectStore = (_store: any) => {
  store = _store
}

const serialize = (params: { [x: string]: any }) => {
  let result = ''
  for (let key in params) {
    result += `${key}=${params[key]}&`
  }
  return `?${result}`
}

let accessToken: string = ''

export const setApiAccessToken = (_token: string) => {
  accessToken = _token
}

const tranformRequest = async (config: AxiosRequestConfig) => {
 
  if (accessToken) {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
}

const tranformRespone = (response: AxiosResponse) => {
  if (response && response.data) {
    return response.data
  }
  return response
}

const create = () => {
  const api = axios.create({
    baseURL: apiConfig.API_URL,
    timeout: apiConfig.API_TIMEOUT_MS,
    headers: apiConfig.HEADERS,
  })
  //@ts-ignore
  api.interceptors.request.use(tranformRequest)
  api.interceptors.response.use(tranformRespone, (error: any) => {
    if (error.response.data) {
      store?.dispatch(showToast({ message: error.response.data }))
    }
    switch (error.response.status) {
      case 403: {
        navigateAndSimpleReset('SLogin')
      }
    }
    throw error
  })

  const register = (payload: RegisterPayload):any =>
    api.post('/api/v1/auth/register', payload)
  const login = (payload: LoginPayLoad): any =>
    api.post('/api/v1/auth/authenticate', payload)
  const getTasks = (payload: GetTasksPayload) =>
    api.get(`api/v1/task${serialize(payload)}`)
  const createTask = (payload: TaskItem) => api.post('api/v1/task', payload)
  const updateTaskStatus = (taskId: number) =>
    api.put(`api/v1/task/${taskId}/status`)
  const updateTaskName = (payload: any) =>
    api.put(`api/v1/task/${payload.taskId}/name`, payload.taskName)
  const deleteTask = (taskId: number) => api.delete(`api/v1/task/${taskId}`)
  return {
    login,
    register,
    getTasks,
    updateTaskStatus,
    updateTaskName,
    createTask,
    deleteTask,
  }
}

export default { create }
