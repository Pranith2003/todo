import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../src/interfaces/todo";

const todoslice = createSlice({
  name: "todo",
  initialState: {
    todos: [] as Todo[],
  },
  reducers: {
    addtodos: (state, action: { payload: Todo }) => {
      state.todos.push(action.payload);
    },

    updatetodo: (
      state,
      action: PayloadAction<{
        id: string | number;
        title: string;
        completed: boolean;
      }>
    ) => {
      const { id, title, completed } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        // Update the todo's title and completed status
        todo.title = title;
        todo.completed = completed;
      }
    },

    deletetodo: (state, action: PayloadAction<string | number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
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
