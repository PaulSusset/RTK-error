import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, Slice } from '@reduxjs/toolkit'
import { SharedRootState } from '../store'

export interface SessionState {
  isLoggedIn: boolean
}

const initialState = (): SessionState => ({
  isLoggedIn: true,
})

export const sessionSlice: Slice = createSlice({
  name: 'session',
  initialState: initialState(),
  reducers: {
    logIn: (state, payload) => {
      state.isLoggedIn = true
    },
    logOut: (state) => {
      return initialState()
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = sessionSlice.actions

export const getIsLoggedIn = (state: SharedRootState) =>
  state.session.isLoggedIn
export const getUser = (state: SharedRootState) => state.session.user

export default sessionSlice.reducer
