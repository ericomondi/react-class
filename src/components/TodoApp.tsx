// TodoApp.tsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

type TodoItem = {
  id: number;
  text: string;
};

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className="display-4 text-center mb-4">To-Do List</h1>{" "}
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} /> {/* Pass todos here */}
    </div>
  );
};

export default TodoApp;
