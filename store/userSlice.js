import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userToken",
  initialState: "",
  reducers: {
    add(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { add } = userSlice.actions;

export default userSlice.reducer;
