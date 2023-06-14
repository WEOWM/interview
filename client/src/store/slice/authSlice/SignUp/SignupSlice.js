import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api";

export const fetchSignUp = createAsyncThunk(
  "SignUP",
  async ({ InpData }, { rejectWithValue }) => {
    console.log(InpData);
    try {
      const response = await api.ActionHandle({
        url: api.SignUpURL,
        method: "POST",
        data: InpData,
      });

      let data = await response;
      if (response.status === 200) {
        let sam = response.data;
        return sam;
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

const SignUpSlice = createSlice({
  name: "SignUP",
  initialState: {
    SignUpList: [],
    SignUpFetching: false,
    SignUpSuccess: false,
    SignUpError: false,
    SignUpErrorMessage: "",
  },
  reducers: {
    clearSignUpState: (state) => {
      state.SignUpError = false;
      state.SignUpSuccess = false;
      state.SignUpFetching = false;

      return state;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        // action.payload.data.results.forEach((items) => {
        //     state.SignUpList.push(items);
        // });

        state.SignUpFetching = false;
        state.SignUpSuccess = true;
        return state;
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.SignUpFetching = false;
        state.SignUpError = true;
        state.SignUpErrorMessage = action?.payload;
        console.log("errr::", state.SignUpErrorMessage);
      })
      .addCase(fetchSignUp.pending, (state) => {
        state.SignUpFetching = true;
      });
  },
});

export const { clearSignUpState } = SignUpSlice.actions;

export default SignUpSlice.reducer;
