import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../../services/auth.service";

const initialState = {
  loading: false,
  //   signupDetail: "",
  loginDetail: "",
  error: "",
  login: false,
};

// SignUp

// export const userRegister = createAsyncThunk(
//   "auth/signup",

//   async (payload, thunkAPI) => {
//     localStorage.setItem("email", payload?.email);

//     try {
//       const data = await AuthService.userSignup(payload);

//       // console.log('wer',data);

//       return data;
//     } catch (error) {
//       console.log("ddd", error);

//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// Login

export const userLogin = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    // localStorage.setItem("email", payload?.email);
    console.log("Hello");
  
    try {
      const data = await AuthService.userLogin(payload);
    console.log(data);
      return data;
    } catch (error) {
    console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    // User Login Middleware cases

    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;

      state.error = action.payload;
    });

    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.signupDetail = action.payload;
      state.error = "";
      state.login = true;
      if (action.payload?.data?.app_code === 20011) {
        state.isOtpCreated = true;
      } else {
        state.isOtpCreated = false;
      }
    });
  },
});

export const { otpStatus, resetAuthStore } = authSlice.actions;
export default authSlice.reducer;
