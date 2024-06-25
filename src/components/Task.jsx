import { useState } from "react";
import { updateTask, deleteTask, toggleTaskStatus } from "../store/tasklist";
import { useDispatch } from "react-redux";
import { FaPencilAlt ,FaFolder,FaTrash} from "react-icons/fa";
const Task = ({ id, task, status }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(task);

  const dispatch = useDispatch();
  const editTodo = () => {
    dispatch(updateTask({ id, task: todoMsg, status }));
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    console.log(id);
    dispatch(toggleTaskStatus({ id }));
  };
  const deleteTodo =()=>{
    dispatch(deleteTask({id,task,status}))
  }
  return (
    <div
      className={`flex border items-center border-black/10 rounded-lg px-4 py-2 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        status ? "bg-[#f78f8f]" : "bg-[#e7dd46]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer rounded-xl w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={status}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 border-2 py-1 px-2" : "border-transparent"
        } ${status ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-9 h-9 rounded-lg text-lg border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (status) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={status}
      >
        {isTodoEditable ? <FaFolder className="text-slate-700" />: <FaPencilAlt className="text-green-600"/>}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-lg border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo()}
      >
        <FaTrash className="text-red-600" />
      </button>
    </div>
  );
};

export default Task;
