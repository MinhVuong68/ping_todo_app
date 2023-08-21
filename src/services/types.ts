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