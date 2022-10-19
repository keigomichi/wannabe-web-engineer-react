import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, flipDone, changeRank }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo todo={todo} deleteTodo={deleteTodo} flipDone={flipDone} changeRank={changeRank} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
