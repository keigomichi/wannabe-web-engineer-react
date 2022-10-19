const Todo = ({ todo, flipDone }) => {
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
    </>
  );
};

export default Todo;
