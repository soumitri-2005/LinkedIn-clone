import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice'; // Import your reducers

const store = configureStore({
  reducer: {
    user: userReducer, // Add reducers here
  },
});

export default store;
