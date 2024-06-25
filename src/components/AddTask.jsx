import {  useState } from "react";
import { v4 as uuid } from "uuid";
import {addTask} from "../store/tasklist";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa6";
const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const id =  uuid();
  const add = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    console.log(task);
    dispatch(addTask({ id, task:task.trim(), status: false }));
    setTask('');
  };
   
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Your Tasks..."
        className="w-full border border-black rounded-l-lg px-3 outline-none duration-150 bg-slate-700 py-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="border border-black rounded-r-lg bg-slate-800 text-orange-500 text-3xl px-4 py-2"
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default AddTask;