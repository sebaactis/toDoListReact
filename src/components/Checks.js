import { useContext } from "react"
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext"



const Checks = () => {

  const { check, deleteCheck, deleteAllChecks } = useContext(TaskContext);

  return (

    <div className="checkContainer">
      <h2> CHECKS </h2>
      {
        check.map((task) => {
          return (

            <div className="checkItem" key={task.id}>
              <h3 className="">{task.titulo} <i style={{ color: "green" }} className="bi bi-clipboard-check-fill"></i> </h3>
              <p className="">{task.tarea}</p>
              <button className="btn btn-danger" onClick={() => deleteCheck(task.id)}> Eliminar Check </button>
            </div>
          )
        })
      }
      <button className="btn btn-warning" onClick={deleteAllChecks}> Eliminar todos los checks </button>
      <Link to="/" className="btn btn-primary" style={{ marginTop: "2rem" }}> Regresar a la pagina principal </Link>
    </div>

  )
}

export default Checks