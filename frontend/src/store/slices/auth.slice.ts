import { AuthResponse, loginRequest, logoutRequest, signupRequest, updateUserRequest } from '../../api/api';
import { getErrorMessage } from '../../utils/axios-error-handler';
import { LoginFormData, SignupFormData, UpdateFormData } from './../../schemas/schema';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AuthState {
    name: string;
    email: string;
    token: string;
    isAuthenticated: boolean;
    error: string | null;
}

const initialState: AuthState = {
    name: "",
    email: "",
    token: "",
    isAuthenticated: false,
    error: null
}

export const signup = createAsyncThunk(
    "auth/signup",
    async (formData: SignupFormData, { rejectWithValue }) => {
        try {
            const response: AuthResponse = await signupRequest(formData);
            return {
                token: response.token,
                email: formData.email,
                name: formData.name
            }
        } catch (error) {
            const errorMessage: string = getErrorMessage(error);
            return rejectWithValue(errorMessage);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async(formData: LoginFormData, { rejectWithValue }) => {
        try {
            const response: AuthResponse = await loginRequest(formData);
            return {
                token: response.token,
                email: formData.email
            }
        } catch (error) {
            const errorMessage: string = getErrorMessage(error);
            return rejectWithValue(errorMessage);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout", 
    async(_, { rejectWithValue }) => {
        try {
            await logoutRequest();
        } catch (error) {
            const errorMessage: string = getErrorMessage(error);
            return rejectWithValue(errorMessage);
        }
    }
);

export const update = createAsyncThunk(
    "auth/update", 
    async(data: UpdateFormData, { rejectWithValue }) => {
        try {
            await updateUserRequest(data);
            return {
                name: data.name
            }
        } catch (error) {
          const errorMessage: string = getErrorMessage(error);
          return rejectWithValue(errorMessage);
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(signup.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.isAuthenticated = true;
            state.error = null;
          })
          .addCase(signup.rejected, (state, action) => {
            state.token = "";
            state.email = "";
            state.name = "";
            state.isAuthenticated = false;
            state.error = action.payload as string;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.isAuthenticated = true;
            state.error = null;
          })
          .addCase(login.rejected, (state, action) => {
            state.token = "";
            state.email = "";
            state.name = "";
            state.isAuthenticated = false;
            state.error = action.payload as string;
          })
          .addCase(logout.fulfilled, (state) => {
            state.token = "";
            state.email = "";
            state.name = "";
            state.isAuthenticated = false;
            state.error = null;
          })
          .addCase(logout.rejected, (state, action) => {
            state.error = action.payload as string;
          })
          .addCase(update.fulfilled, (state, action) => {
            state.name = action.payload.name;
            state.error = null;
          })
          .addCase(update.rejected, (state, action) => {
            state.error = action.payload as string;
          })
    }
})

export default authSlice.reducer;
