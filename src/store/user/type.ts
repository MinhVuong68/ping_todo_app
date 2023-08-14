export type UserProfile = {
  id: number
  name: string
  avatar: string
}

export type UserState = {
  profile: UserProfile
  token: string | null
}
