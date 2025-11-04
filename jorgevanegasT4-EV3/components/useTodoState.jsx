import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// El nombre del Hook DEBE comenzar con 'use'
export const useTodoState = (initialTodos = []) => {
    // 1. Inicialización del estado
    const [todos, setTodos] = useState(initialTodos);

    // 2. Funciones de manipulación del estado
    const addTodo = (task) => {
        setTodos((currentTodos) => [
            ...currentTodos,
            {
                id: uuidv4(),
                task: task, // Se usa 'task' en lugar de 'todo'
                completed: false,
                isEditing: false,
            },
        ]);
    };

    const deleteTodo = (id) => {
        setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos((currentTodos) =>
            currentTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (id) => {
        setTodos((currentTodos) =>
            currentTodos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (task, id) => {
        setTodos((currentTodos) =>
            currentTodos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    // 3. Retornar el estado y las funciones necesarias para el componente
    return {
        todos,
        addTodo,
        deleteTodo,
        toggleComplete,
        editTodo,
        editTask,
    };
};