import { useSelector } from "react-redux";
import Task from "./Task";
const Tasks = () => {
    const tasks = useSelector((state) => state?.tasks?.tasks) || [];
  return (
    <div className="flex flex-col gap-4 ">
        {tasks.map((item,key)=><Task  key={key} {...item} /> )}
    </div>
  )
}

export default Tasks;