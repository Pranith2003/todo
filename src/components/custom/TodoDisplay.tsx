import { Todo } from "@/interfaces/todo";
import TodoTile from "./TodoTile";
import { useSelector } from "react-redux";


const TodoDisplay = () => {
  const todos = useSelector((state: any) => state.todo.todos as Todo[]);
  return (
    <>
      <div className="my-10">
        {todos.map((todo) => (
          <TodoTile key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};

export default TodoDisplay;
