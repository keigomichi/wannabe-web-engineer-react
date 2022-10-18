import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todoName, setTodoName] = useState("");

  const createTodo = () => {
    if (todoName == "") return;
    addTodo({
      id: Math.floor(Math.random() * 1e5),
      name: todoName,
      done: false,
    });
    setTodoName("");
  };

  return (
    <div>
      <label htmlFor="todoName">
        <input
          type="text"
          id="todoName"
          onChange={(e) => setTodoName(e.target.value)}
          value={todoName}
        />
      </label>
      <button onClick={createTodo}>追加</button>
    </div>
  );
};

export default TodoForm;
