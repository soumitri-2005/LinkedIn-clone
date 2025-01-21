import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice'; // Import your reducers

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add reducers here
  },
});

export default store;
