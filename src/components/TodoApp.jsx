import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(sessionStorage.getItem("todos"));
    setTodos(storageTodos);
  }, []);

  // useEffect(() => {
  //   sessionStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const addTodo = (todo) => {
    // setTodos((prev) => [...prev, todo]);
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    sessionStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const flipDone = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    sessionStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <>
      <h2>タスク</h2>
      <TodoList todos={todos} flipDone={flipDone} />
      <TodoForm addTodo={addTodo} />
    </>
  );
};

export default TodoApp;
