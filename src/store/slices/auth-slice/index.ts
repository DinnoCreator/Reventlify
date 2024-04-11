import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../../../api-url";
import { InitialState, UserDetails } from "./authSlice-types";

const initialState: InitialState = {
  isLoggedIn: false,
  user: null,
  errorMessage: null,
  loading: false,
  expiresAt: null,
};

export const login = createAsyncThunk(
  "login",
  async (userDetails: UserDetails) => {
    const response = await fetch(`${api}/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    if (!response.ok) {
      // Handle non-200 response codes
      const data = await response.json();
      throw new Error(data.message); // Let Redux Toolkit handle the error
    }

    const data = await response.json();
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // initialState: initialState,
  reducers: {
    logout(state, action: PayloadAction<InitialState>) {
      state.isLoggedIn = false;
      state.user = null;
      state.errorMessage = null;
      state.loading = false;
      sessionStorage.removeItem("reventlify_user");
    },
    updatePhoto(state, action: PayloadAction<InitialState>) {
      state.user.photo = action.payload;
    },
    updateAbout(state, action: PayloadAction<InitialState>) {
      state.user.about = action.payload;
    },
    tokenExpiry(state, action: PayloadAction<InitialState>) {
      state.expiresAt = action.payload.expiresAt;
    },
    stopLoad(state) {
      state.loading = false;
    },
    deleteError(state) {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    /******login******* */
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = payload.auth;
      state.user = payload.user;
      state.expiresAt = Number(payload.expiresAt);
      localStorage.setItem("reventlify_user", payload.user.token);
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message as string;
    });
  },
});
export const authActions = authSlice.actions;
// export const userloggedIn = (state: any) => state.auth.isLoggedIn;
