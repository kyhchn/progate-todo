import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="flex flex-col gap-y-4 mt-10">
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default Todos;
