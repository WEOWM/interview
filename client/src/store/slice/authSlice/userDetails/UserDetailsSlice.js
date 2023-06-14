import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api";

export const fetchUserDetails = createAsyncThunk(
  "User-details",
  async ({userID}, { rejectWithValue }) => {
    try {
      const response = await api.ActionHandle({
        url: api.userDetailsURL.replace(":id",userID),
        method: "GET",
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
const UserDetailsSlice = createSlice({
  name: "User-details",
  initialState: {
    UserDetails: [],
    UserDetailsFetching: false,
    UserDetailsSuccess: false,
    UserDetailsError: false,
    UserDetailsErrorMessage: "",
  },
  reducers: {
    fslClearState: (state) => {
      state.UserDetailsError = false;
      state.UserDetailsSuccess = false;
      state.UserDetailsFetching = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.UserDetails = action.payload
        console.log(state.UserDetails);
        state.UserDetailsFetching = false;
        state.UserDetailsSuccess = true;
        return state;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.UserDetailsFetching = false;
        state.UserDetailsError = true;
        state.UserDetailsErrorMessage = action?.payload;
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.UserDetailsFetching = true;
      });
  },
});

export const { UserDetailsClearState } = UserDetailsSlice.actions;

export default UserDetailsSlice.reducer;
