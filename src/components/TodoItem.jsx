import { useContext } from "react";
import { TodoContext } from "../App";
import { X } from "@phosphor-icons/react";
import { cn } from "../utils/cn";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);
  return (
    <div className=" min-w-[65vw] bg-white cursor-pointer hover:bg-slate-200 hover:-translate-y-1 transition-all duration-200 rounded-xl p-4 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start gap-x-4">
        <input type="checkbox" onChange={() => toggleCompleted(todo.id)} />
        <p
          className={cn(
            todo.completed ? "line-through" : null,
            "font-semibold text-base"
          )}
        >
          {todo.title}
        </p>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className=" p-2 rounded-xl group hover:bg-red-500"
      >
        <X size={16} weight="bold" className="group-hover:text-white" />
      </button>
    </div>
  );
};

export default TodoItem;
