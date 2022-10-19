import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

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

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id).sort(compareFn);
    setTodos(newTodos);
    sessionStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const flipDone = (id) => {
    const newTodos = todos
      .map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
      .sort(compareFn);
    setTodos(newTodos);
    sessionStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const changeRank = (id, rank) => {
    const newTodos = todos
      .map((todo) => {
        if (todo.id === id) {
          return { ...todo, rank: rank };
        } else {
          return todo;
        }
      })
      .sort(compareFn);
    setTodos(newTodos);
    sessionStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <>
      <h2>ToDoリスト</h2>
      <a
        target="_blank"
        href="https://github.com/keigomichi/wannabe-web-engineer-react"
        rel="noreferrer"
      >
        GitHub
      </a>
      {todos && todos.length !== 0 ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          changeRank={changeRank}
          flipDone={flipDone}
        />
      ) : (
        <div>まだタスクはありません</div>
      )}
      <TodoForm addTodo={addTodo} />
    </>
  );
};

export default TodoApp;
