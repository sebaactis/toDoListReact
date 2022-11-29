import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const InputForm = () => {


    const { addTask } = useContext(TaskContext);

    const [titulo, setTitulo] = useState("");
    const [tarea, setTarea] = useState("");



    const handleTitulo = (e) => setTitulo(e.target.value);
    const handleTarea = (e) => setTarea(e.target.value);



    const cargarTarea = (e) => {
        e.preventDefault();

        const objTarea = {
            titulo: titulo,
            tarea: tarea,
            id: crypto.randomUUID()
        }

        addTask(objTarea);

    }

    return (
        <form className="formContainer">

            <p className="formTitle">Ingrese la tarea a realizar</p>
            <i className="bi bi-arrow-down-square-fill arrowForm" style={{ fontSize: "2.5rem" }}></i>
            <input className="tituloForm" type="text" placeholder="Titulo" onChange={handleTitulo}></input>
            <textarea className="areaForm" style={{ height: "300px", resize: "none" }} maxLength="200" onChange={handleTarea} ></textarea>
            <button className="btn btn-success" onClick={cargarTarea} disabled={titulo === "" || tarea === ""}> Agregar </button>
             <Link className="btn btn-secondary" style={{marginTop: "10px"}} to="/checks"> GO CHECKS </Link> 

        </form>
    )
}

export default InputForm