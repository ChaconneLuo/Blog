import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../api/User'

interface UserState {
  email: string
  lastName: string
  firstName: string
}

let initial: UserState = {
  email: '',
  lastName: '',
  firstName: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initial,
  reducers: {
    setUserInfo: (state: Draft<UserState>, action: PayloadAction<Partial<UserState>>) => {
      const userInfo = action.payload
      return {
        ...state,
        ...userInfo
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    })
  }
})
export const updateUserInfo = createAsyncThunk('user/updateUserInfo', async (): Promise<UserState> => {
  return (await User.getInfo()).data
})
export const { setUserInfo } = userSlice.actions
export default userSlice.reducer
