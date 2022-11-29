import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {


    const [taskList, setTaskList] = useState([]);
    const [check, setCheck] = useState([]);




    const addTask = (task) => {
        setTaskList([...taskList, task])
    }


    const addCheck = (task, id) => {
        setCheck([...check, task])
        deleteTask(id);
    }

    const deleteTask = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id))
    }

    const deleteAll = () => {
        setTaskList([]);
    }

    const deleteAllChecks = () => {
        setCheck([]);
    }

    const deleteCheck = (id) => {
        setCheck(check.filter((task) => task.id !== id))
    }

    console.log(check);

    return (
        <TaskContext.Provider value={{ addTask, taskList, deleteAll, deleteTask, addCheck, check, deleteCheck, deleteAllChecks }}>

            {children}

        </TaskContext.Provider>
    )
}

export default TaskProvider