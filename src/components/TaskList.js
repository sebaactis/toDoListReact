import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';


const TaskList = () => {

  const { taskList, deteleAll, deteleTask } = useContext(TaskContext);

  return (

    taskList.length === 0
      ?
      <p className="nothingTask">No hay nada ingresado </p>
      :
      <div className="allTasksConteiner">
        {
          taskList.map((task) => {
            return (
              <div className="taskConteiner" key={task.id}>
                <h2 className="tituloTask">{task.titulo}</h2>
                <p className="areaTask">{task.tarea}</p>
                <div className="buttons">
                  <button style={{ margin: "0 1rem" }} className="btn btn-danger" onClick={() => deteleTask(task.id)}><i class="bi bi-x-circle-fill"></i></button>
                  <button className="btn btn-success" onClick={() => deteleTask(task.id)}><i class="bi bi-check-circle-fill"></i></button>
                </div>
              </div>
            )
          })
        }
        <button className="btn btn-danger" onClick={deteleAll}> Eliminar todas las tareas </button>
      </div>
  )
}

export default TaskList