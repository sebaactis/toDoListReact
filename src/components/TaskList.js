import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';


const TaskList = () => {

  const { taskList, deteleAll, deteleTask } = useContext(TaskContext);

  return (

    <div>
      {
        taskList.map((task) => {
          return (
            <div key={task.id}>
              <h1>{task.titulo}</h1>
              <p>{task.tarea}</p>
              <button onClick={() => deteleTask(task.id)}>Borrar Tarea</button>
            </div>
          )
        })
      }
      <button onClick={deteleAll}> Eliminar todas las tareas </button>
    </div>
  )
}

export default TaskList