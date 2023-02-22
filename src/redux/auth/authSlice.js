import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { register, logIn, logOut, fetchCurrentUser } from './authOperations'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: {
      [register.fulfilled](state, { payload: { token, user } }) {
        state.user = user
        state.token = token
        state.isLoggedIn = true
      },
      [logIn.fulfilled](state, { payload: { token, user } }) {
        state.user = user
        state.token = token
        state.isLoggedIn = true
      },
      [logOut.fulfilled](state) {
        state.user = { name: null, email: null }
        state.token = null
        state.isLoggedIn = false
      },
      [fetchCurrentUser.pending](state) {
        state.isRefreshing = true
      },
      [fetchCurrentUser.fulfilled](state, { payload }) {
        state.user = payload
        state.isLoggedIn = true
        state.isRefreshing = false
      },
      [fetchCurrentUser.rejected](state) {
        state.isRefreshing = false
      }
    }
})

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}


export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer)