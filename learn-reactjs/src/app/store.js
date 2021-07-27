import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReduce = {
  count: counterReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReduce,
});

export default store;
