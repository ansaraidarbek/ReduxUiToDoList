import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const data = await response.json();
  return data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  return id;
});

export const toggleTodoStatus = createAsyncThunk('todos/toggleTodoStatus', async (id) => {
  return id;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    elems: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchTodos.fulfilled, (state, action) => {
      state.elems =  action.payload;
    })
    .addCase(deleteTodo.fulfilled, (state, action) => {
      state.elems = state.elems.filter(todo => todo.id !== action.payload);
    })
    .addCase(toggleTodoStatus.fulfilled, (state, action) => {
      state.elems = state.elems.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    });
  }
});

export default todosSlice.reducer;
