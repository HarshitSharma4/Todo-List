import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  tasks: [],
};
//{id,task,status}
const tasklist = createSlice({
  name: "tasks",
  initialState: initialValues,
  reducers: {
    addTodoList: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      console.log(action.payload);
      if (
        !(
          state.tasks.filter((item) => item.task === action.payload.task)
            .length > 0
        )
      ) {
        state.tasks.push(action.payload);
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action) => {
      
      state.tasks = state.tasks.filter((item) => {
        if (item.task !== action.payload.task) {
          return item;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTaskStatus: (state, action) => {
      console.log(action.payload);
      state.tasks = state.tasks.map((item) => {
        if (item.id === action.payload.id) {
          console.log(item.status);
          console.log( { ...item, status: !item.status });
          return { ...item, status: !item.status };
        }
        return item;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});
export const {
  addTodoList,
  addTask,
  deleteTask,
  updateTask,
  toggleTaskStatus,
} = tasklist.actions;
export default tasklist.reducer;
