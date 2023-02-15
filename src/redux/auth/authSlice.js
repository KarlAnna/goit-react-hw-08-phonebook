import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { authOperations } from './authOperations'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: {
        
    }
})

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token']
}


export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer)