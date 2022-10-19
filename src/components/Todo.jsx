import { useState } from "react";

const Todo = ({ todo, deleteTodo, flipDone, changeRank }) => {
  const [todoRank, setTodoRank] = useState(todo.rank);

  const Rank = () => {
    switch (todo.rank) {
      case "1":
        return <span> :高</span>;
      case "2":
        return <span> :中</span>;
      case "3":
        return <span> :低</span>;
    }
  };

  const changeHandler = (e) => {
    setTodoRank(e.target.value);
    changeRank(todo.id, e.target.value);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={todo.done ? true : false}
        onChange={() => {
          flipDone(todo.id);
        }}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.name}
      </span>
      <Rank />
      <label htmlFor="todoRank">
        <select id="todoRank" value={todoRank} onChange={changeHandler}>
          <option value="1">高</option>
          <option value="2">中</option>
          <option value="3">低</option>
        </select>
      </label>
      <button onClick={() => deleteTodo(todo.id)}>削除</button>
    </>
  );
};

export default Todo;
