import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";

type TodoItem = {
  id: string;
  text: string;
};

const initializeTodos = () => {
  const savedTodos = localStorage.getItem("todos");

  if (savedTodos) {
    return JSON.parse(savedTodos) as TodoItem[];
  }

  return [];
};

const Todos = () => {
  const [todos, setTodos] = useState<TodoItem[]>(initializeTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodoText: string) => {
    const newTodo: TodoItem = {
      id: self.crypto.randomUUID(),
      text: newTodoText,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-form">
      <AddTodoForm onAddTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
