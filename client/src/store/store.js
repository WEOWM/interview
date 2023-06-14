import { configureStore } from "@reduxjs/toolkit";

import SignInSlice from "./slice/authSlice/SignIn/SignInSlice";
import SignUpSlice from "./slice/authSlice/SignUp/SignupSlice";
import UserDetailsSlice from "./slice/authSlice/userDetails/UserDetailsSlice";

export const store = configureStore({
  reducer: {

    // sign-In
    SignInSlice,

    // sign-Up
    SignUpSlice,

    // User-details
    UserDetailsSlice,
  },
});
