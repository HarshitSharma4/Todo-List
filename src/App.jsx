import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodoList } from "./store/tasklist";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedTodos = localStorage.getItem("tasks");
    if (storedTodos) {
      try {
        dispatch(addTodoList(JSON.parse(storedTodos)));
      } catch (error) {
        // Handle the error, for example:
        console.error("Error parsing stored todos:", error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen w-screen bg-[#45474B] text-[#F5F7F8] font-extrabold text-xl px-4">
      <div className="flex flex-col gap-4  w-[95%] md:w-[85%] m-auto">

      <h1 className="text-center pt-4 mb-5">Efficient Ways to Organize and Prioritize</h1>
      <AddTask />
      <Tasks />
      </div>
    </div>
  );
};

export default App;
