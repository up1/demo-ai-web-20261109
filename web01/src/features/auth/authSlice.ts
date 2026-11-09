import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { requestLogin } from './services/authService'
import type { AuthState, LoginCredentials, LoginResponse } from './types'

const initialState: AuthState = {
  token: null,
  status: 'idle',
  error: null,
}

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await requestLogin(credentials)
    return response.data
  } catch (error) {
    if (axios.isAxiosError<{ message?: string }>(error)) {
      return rejectWithValue(error.response?.data.message ?? 'Unable to sign in. Please try again.')
    }

    return rejectWithValue('Unable to sign in. Please try again.')
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError(state) {
      state.error = null
      if (state.status === 'failed') state.status = 'idle'
    },
    logout() {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload.token
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload ?? 'Unable to sign in. Please try again.'
      })
  },
})

export const { clearAuthError, logout } = authSlice.actions
export default authSlice.reducer