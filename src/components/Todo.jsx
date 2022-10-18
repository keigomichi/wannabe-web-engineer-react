const Todo = ({ todo, flipDone }) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={() => {
          flipDone(todo.id);
        }}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.name}
      </span>
    </>
  );
};

export default Todo;
