import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import articleSlice from './articleSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    article: articleSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
