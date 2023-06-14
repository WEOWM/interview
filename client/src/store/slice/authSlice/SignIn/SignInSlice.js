import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api";

export const fetchSignIn = createAsyncThunk(
  "SignIn",
  async ({ InpData }, { rejectWithValue }) => {
    console.log(InpData);
    try {
      const response = await api.ActionHandle({
        url: api.SignInURL,
        method: "POST",
        data: InpData,
      });

      let data = await response;
      if (response.status === 200) {
        let newData = response.data;
        console.log(newData);

        // localStorage.setItem("test-token",newData);
        localStorage.setItem("test-token",JSON.stringify(newData));

        return newData;
      } else {
        return rejectWithValue(data);
      }
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();

      return rejectWithValue(message);
    }
  }
);

const SignInSlice = createSlice({
  name: "SignIn",
  initialState: {
    SignInFetching: false,
    SignInSuccess: false,
    SignInError: false,
    SignInErrorMessage: "",
  },
  reducers: {
    clearSignInState: (state) => {
      state.SignInError = false;
      state.SignInSuccess = false;
      state.SignInFetching = false;

      return state;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSignIn.fulfilled, (state, action) => {

        state.SignInFetching = false;
        state.SignInSuccess = true;
        return state;
      })
      .addCase(fetchSignIn.rejected, (state, action) => {
        state.SignInFetching = false;
        state.SignInError = true;
        state.SignInErrorMessage = action?.payload;
        console.log("errr::", state.SignInErrorMessage);
      })
      .addCase(fetchSignIn.pending, (state) => {
        state.SignInFetching = true;
      });
  },
});

export const { clearSignInState } = SignInSlice.actions;

export default SignInSlice.reducer;
