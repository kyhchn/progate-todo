import { createContext, useState } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const addTodo = (todoTitle) => {
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title: todoTitle,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <TodoContext.Provider
      value={{ todos, toggleCompleted, deleteTodo, addTodo }}
    >
      <div className="size-full flex flex-col items-center p-8">
        <h1 className="font-bold bg-clip-text text-5xl text-transparent bg-gradient-to-tr from-pink-600 to-purple-600">
          My Todo List
        </h1>
        <TodoForm />
        <Todos /> {/* Display Todos component */}
      </div>
    </TodoContext.Provider>
  );
}

export default App;
