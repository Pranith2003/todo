import { Delete, Pencil } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

import { Todo } from "../../interfaces/todo";

const TodoTile = ({ todo }: { todo: Todo }) => {
  return (
    <>
      <div className="flex justify-between py-2 border-b-2">
        <div className="flex items-center gap-2 ">
          <Checkbox
            onClick={() => {
              console.log(todo.id);
            }}
          />
          <h3>{todo.title}</h3>
        </div>
        <div className="flex gap-3">
          <Pencil size={20} cursor="pointer" />
          <Delete size={20} cursor="pointer" />
        </div>
      </div>
    </>
  );
};
export default TodoTile;
