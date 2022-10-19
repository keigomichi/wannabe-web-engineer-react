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

  const compareFn = (a, b) => {
    if (parseInt(a.rank) < parseInt(b.rank)) {
      return -1;
    }
    if (parseInt(a.rank) > parseInt(b.rank)) {
      return 1;
    }
    return 0;
  };

  const addTodo = (todo) => {
    // setTodos((prev) => [...prev, todo]);
    const newTodos = todos !== null ? [...todos, todo].sort(compareFn) : [todo];
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
      {todos !== null ? (
        <TodoList todos={todos} flipDone={flipDone} />
      ) : (
        <div>タスクはありません</div>
      )}
      <TodoForm addTodo={addTodo} />
    </>
  );
};

export default TodoApp;
