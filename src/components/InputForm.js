import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const InputForm = () => {


    const {addTask} = useContext(TaskContext);

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
        console.log(objTarea);
        addTask(objTarea);

    }

    return (
        <form className="formContainer">

            <h2>Ingrese la tarea a realizar aqui:</h2>
            <input type="text" placeholder="Titulo" onChange={handleTitulo}></input>
            <textarea style={{ height: "300px", resize: "none" }} onChange={handleTarea} ></textarea>
            <button onClick={cargarTarea}> Agregar </button>

        </form>
    )
}

export default InputForm