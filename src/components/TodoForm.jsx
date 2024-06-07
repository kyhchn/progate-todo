import { useContext, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { TodoContext } from "../App";

export default function TodoForm() {
  const [todoTitle, setTodoTitle] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add a Todo!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Todo Added!",
        text: `Your todo "${todoTitle}" has been added.`,
      });
      addTodo(todoTitle);
      setTodoTitle("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg"
    >
      <div className="flex flex-row items-center justify-center gap-x-4">
        <input
          type="text"
          placeholder="Add your Todo"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          className="p-2 border backdrop-blur-3xl border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}
