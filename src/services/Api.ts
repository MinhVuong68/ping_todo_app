import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import apiConfig from '@/configs/apiConfig'
import { LoginPayLoad, RegisterPayload } from './types'
import { UserState } from '@/store/user/type'

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
    config.headers?.Authorization = `Bearer ${accessToken}`
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
  // @ts-ignore
  api.interceptors.request.use(tranformRequest)
  api.interceptors.response.use(tranformRespone, error => {
    throw error
  })

  const register = (payload: RegisterPayload) =>
    api.post('/api/v1/auth/register', payload)
  const login = (payload: LoginPayLoad) =>
    api.post('/api/v1/auth/authenticate', payload)

  return {
    login,
    register,
  }
}

export default { create }
