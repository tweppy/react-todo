import { useEffect, useState } from "react";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { NewTodoForm } from "./components/NewTodoForm/NewTodoForm";
import { TodoList } from "./components/TodoList/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("items");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: uuidv4(), title, completed: false }];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="container">
      <h1 className="site-header">{"Let's Get Productive!"}</h1>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo Tasks</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
