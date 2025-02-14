import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"; // Importing reducers

const store = configureStore({
  reducer: {
    user: userReducer, 
  },
});

export default store;
