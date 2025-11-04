import { TodoForm } from "./TodoForm.jsx";
import { Todo } from "./Todo.jsx";
import { EditTodoForm } from "./EditTodoForm.jsx";
import { useTodoState } from "./useTodoState.jsx"; // <--- ¡Importar el Custom Hook!

export const TodoWrapper = () => {
    // 1. Reemplazar useState y las funciones con el Custom Hook
    const {
        todos,
        addTodo,
        deleteTodo,
        toggleComplete,
        editTodo,
        editTask,
    } = useTodoState([]); // Llamamos al hook y desestructuramos lo que retorna

    // 2. El resto del código de renderizado (return) permanece igual
    return (
        <div className="TodoWrapper">
            <h1>Lista de cosas por hacer</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
                ) : (
                    <Todo
                        task={todo}
                        key={todo.id}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            ))}
        </div>
    );
};