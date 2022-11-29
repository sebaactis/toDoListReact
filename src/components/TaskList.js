import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';


const TaskList = () => {

  const { taskList, deleteAll, deleteTask, addCheck } = useContext(TaskContext);

  return (



    taskList.length === 0
      ?
       <p className="nothingTask">  <i className="bi bi-shield-x" ></i> No tienes notas ingresadas hasta el momento <i className="bi bi-shield-x"></i> </p>
      :
      <div className="allTasksContainer">
        {
          taskList.map((task) => {
            return (
              <div key={task.id}>
                <h3 className="tituloTask">{task.titulo}</h3>
                <p className="areaTask">{task.tarea}</p>
                <div className="buttons">
                  <button style={{ margin: "0 1rem" }} className="btn btn-danger" onClick={() => deleteTask(task.id)}><i className="bi bi-x-circle-fill"></i></button>
                  <button className="btn btn-success" onClick={() => addCheck(task, task.id)}><i className="bi bi-check-circle-fill"></i></button>
                </div>
              </div>
            )
          })
        }
        <button className="btn btn-danger" onClick={deleteAll}> Eliminar todas las tareas </button>
      </div>
  )
}

export default TaskList