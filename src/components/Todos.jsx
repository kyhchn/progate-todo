import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos &&
        todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
    </div>
  );
};

export default Todos;
