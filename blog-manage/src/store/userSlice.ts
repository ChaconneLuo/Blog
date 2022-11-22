import { createSlice } from '@reduxjs/toolkit'

interface userState {
  email: string
  lastName: string
  firstName: string
}

let initial: userState = {
  email: '',
  lastName: '',
  firstName: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initial,
  reducers: {}
})

export default userSlice.reducer
