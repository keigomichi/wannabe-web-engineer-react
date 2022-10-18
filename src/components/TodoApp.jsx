import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([{ id: 1, name: "task", done: false }]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
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
