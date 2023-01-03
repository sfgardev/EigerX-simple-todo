import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";

type TodoItem = {
  id: string;
  text: string;
};

const Todos = () => {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

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

  return (
    <div className="todo-form">
      <AddTodoForm onAddTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
