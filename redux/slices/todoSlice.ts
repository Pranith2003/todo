import { createSlice } from "@reduxjs/toolkit";
import {Todo} from "../../src/interfaces/todo";

const todoslice = createSlice({
  name: "todo",
  initialState: {
    todos: [] as Todo[],
  },
  reducers: {
    addtodos: (state, action: { payload: Todo }) => {
      state.todos.push(action.payload);
    },

    updatetodo: (state, action: { payload: Todo }) => {
      const index = state.todos.findIndex((todo) => {
        todo.id === action.payload.id;
        state.todos[index] = {
          ...state.todos[index],
          ...action.payload,
        };
      });
    },

    deletetodo: (state, action: { payload: Todo }) => {
      const index = state.todos.filter((todo) => todo.id !== action.payload.id);
      console.log(index);
    },

    completetodo: (state, action: { payload: string }) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const [temptodo] = state.todos.splice(index, 1);
      temptodo.completed = true;
      state.todos.push(temptodo);
    },
  },
});

export const { addtodos, updatetodo, deletetodo, completetodo } =
  todoslice.actions;
export default todoslice.reducer;
