import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {


    const [taskList, setTaskList] = useState([]);

    const addTask = (task) => {
        setTaskList([...taskList, task])    
    }

    const deteleTask = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id))
    }

    const deteleAll = () => {
        setTaskList([]);
    }

    console.log(taskList);

    return (
        <TaskContext.Provider value={{addTask, taskList, deteleAll, deteleTask}}>

            {children}

        </TaskContext.Provider>
    )
}

export default TaskProvider