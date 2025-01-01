import { Todo } from "@/interfaces/todo";
import TodoTile from "./TodoTile";

const todos: Todo[] = [
  {
    id: "1",
    title: "Hello",
    completed: false,
  },
  {
    id: "2",
    title: "HEllo",
    completed: false,
  },
  {
    id: "3",
    title: "HeLlo",
    completed: false,
  },
  {
    id: "4",
    title: "HelLo",
    completed: false,
  },
  {
    id: "5",
    title: "HellO",
    completed: false,
  },
];

const TodoDisplay = () => {
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
