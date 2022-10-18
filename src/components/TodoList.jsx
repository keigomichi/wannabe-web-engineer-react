import Todo from "./Todo";

const TodoList = ({ todos, flipDone }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo todo={todo} flipDone={flipDone} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
