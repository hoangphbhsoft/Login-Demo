import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export interface AuthState {
  username: string;
  password: string;
  status: "idle" | "pending" | "failed" | "succeeded";
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  username: "",
  password: "",
  status: "idle",
  isAuthenticated: false,
};

export const fakeLogin = createAsyncThunk(
  "fakeLogin",
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
    await axios
      .get("https://httpbin.org/basic-auth/hoang/hoang", {
        auth: { username, password },
      })
      .then(response => {
        if (response.status !== 200) {
          return rejectWithValue(response.data);
        }
        return response.data;
      });
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    logout: state => {
      state.username = "";
      state.password = "";
      state.isAuthenticated = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fakeLogin.pending, state => {
        state.status = "pending";
      })
      .addCase(fakeLogin.fulfilled, state => {
        state.status = "succeeded";
        state.isAuthenticated = true;
      })
      .addCase(fakeLogin.rejected, state => {
        state.status = "failed";
      });
  },
});

export const selectUsername = (state: RootState) => state.auth.username;
export const selectPassword = (state: RootState) => state.auth.password;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectStatus = (state: RootState) => state.auth.status;

export const { updateUsername, updatePassword, logout } = authSlice.actions;

export default authSlice.reducer;
