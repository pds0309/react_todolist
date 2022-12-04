import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, action) => {
      state.todos = state.todos.concat({ id: Date.now(), done: false, ...action.payload });
    },
    update: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );
    },
    remove: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { add, update, remove } = todoSlice.actions;

export default todoSlice.reducer;
