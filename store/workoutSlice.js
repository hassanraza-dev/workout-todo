import { createSlice } from "@reduxjs/toolkit";

const workoutSlice = createSlice({
  name: "workouts",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const { add } = workoutSlice.actions;

export default workoutSlice.reducer;
