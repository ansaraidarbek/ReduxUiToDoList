import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import userReducer from './userSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
    theme : themeReducer
  }
});

export default store;
