import { useSelector } from "react-redux";
import Task from "./Task";
const Tasks = () => {
    const tasks = useSelector((state) => state?.tasks?.tasks) || [];
    
  return (
    <div className="flex flex-col gap-4 ">
        {tasks.map((item)=><Task  key={item.id} {...item} /> )}
    </div>
  )
}

export default Tasks;