import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>(""); // Estado para la nueva tarea
    const [listaTareas, setListaTareas] = useState<string[]>([]); // Cambiar el nombre del estado para evitar conflicto

    const handleAddTask = () => {
        // Agregar lógica para agregar tarea al estado
        if (nuevaTarea.trim() === "") return; // Evitar agregar tareas vacías

        setListaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]); // Agregar nueva tarea
        setNuevaTarea(""); // Limpiar el input
    };

    const handleBorrarTarea = (index: number) => {
        // Lógica para eliminar una tarea del estado
        setListaTareas((tareas) => tareas.filter((_, i) => i !== index)); // Filtrar la tarea a eliminar
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                <button onClick={handleAddTask}>Agregar</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    );
};
