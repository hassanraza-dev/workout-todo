import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "./workoutSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    workout: workoutReducer,
    token: userSlice,
  },
});

export default store;
