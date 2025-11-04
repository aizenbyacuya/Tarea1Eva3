import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className="Todo">
            <p
                onClick={() => toggleComplete(task.id)}
                className={`${task.toggleComplete ? "completed" : ""}`}
            >
                {task.task}
            </p>
            <div></div> {/* Este div vacío parece un error de la transcripción manual o en el código fuente que usaste antes. Lo estoy dejando como se ve en la imagen, que es incorrecto para agrupar los iconos. */}
            <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={() => editTodo(task.id)}
            />
            <FontAwesomeIcon
                icon={faTrash}
                onClick={() => deleteTodo(task.id)}
            />
        </div>
    );
};