import * as connectapi from "services/connections-api"
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (user, { rejectWithValue }) => {
        try {
            const data = await connectapi.register(user)
            setAuthHeader(data.token)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (user, { rejectWithValue }) => {
        try {
            const data = await connectapi.logIn(user)
            setAuthHeader(data.token)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, { rejectWithValue }) => {
        try {
            const data = await connectapi.logOut()
            clearAuthHeader()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchCurrentUser = createAsyncThunk(
    'auth/fetchCurrent',
    async (_, { rejectWithValue, getState }) => {
        const { auth: { token } } = getState()
        if (token === null) {
            return
        }
        setAuthHeader(token)
        try {
            const data = await connectapi.fetchCurrentUser()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)