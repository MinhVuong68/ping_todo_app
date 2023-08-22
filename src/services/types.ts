export type LoginPayLoad = {
  phoneNumber: string
  password: string
}

export type RegisterPayload = {
    name: string,
    phoneNumber: string,
    password: string
}

export type GetTasksPayload = {
  userId: number,
  date: string,
}

export type TaskItem = {
  name: string,
  userId: number
}