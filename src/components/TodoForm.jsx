import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoRank, setTodoRank] = useState("1");
  console.log(todoRank);

  const createTodo = () => {
    if (todoName == "") return;
    addTodo({
      id: Math.floor(Math.random() * 1e5),
      name: todoName,
      done: false,
      rank: todoRank,
    });
    setTodoName("");
    setTodoRank("1");
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
      <label htmlFor="todoRank">
        <select
          id="todoRank"
          value={todoRank}
          onChange={(e) => setTodoRank(e.target.value)}
        >
          <option value="1">高</option>
          <option value="2">中</option>
          <option value="3">低</option>
        </select>
      </label>
      <button onClick={createTodo}>追加</button>
    </div>
  );
};

export default TodoForm;
