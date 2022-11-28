import { useContext, useState } from "react";
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

            <p className="formTitle">Ingrese la tarea a realizar aqui</p>
            <i class="bi bi-arrow-down-square-fill arrowForm" style={{fontSize: "2.5rem"}}></i>
            <input className="tituloForm" type="text" placeholder="Titulo" onChange={handleTitulo}></input>
            <textarea className="areaForm" style={{ height: "300px", resize: "none" }} onChange={handleTarea} ></textarea>
            <button className="btn btn-success" onClick={cargarTarea}> Agregar </button>

        </form>
    )
}

export default InputForm