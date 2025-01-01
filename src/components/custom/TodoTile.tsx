import { Delete, Pencil, Save } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Todo } from "../../interfaces/todo";
import {
  completetodo,
  deletetodo,
  updatetodo,
} from "../../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const TodoTile = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [edit, giveedit] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const editodo = () => {
    // Ensure title is not empty before dispatching the update action
    if (title.trim() !== "") {
      dispatch(
        updatetodo({
          id: todo.id,
          title,
          completed: todo.completed,
        })
      );
      giveedit(!edit); // Toggling edit state back to false
    } else {
      toast({
        title: "Todo cannot be Empty",
        variant: "destructive",
      });
    }
  };

  const markascomplete = () => {
    if (todo.completed) return;
    dispatch(completetodo(todo.id));
    toast({
      title: "Task Completed",
      variant: "success",
    });
  };

  return (
    <div className="flex justify-between py-2 border-b-2">
      <div className="flex items-center gap-2">
        <Checkbox onClick={markascomplete} checked={todo.completed} />
        <h3
          className={`font-serif capitalize ${
            todo.completed ? "line-through" : "" 
          } outline-none`}
          contentEditable={edit}
          onInput={(e) => setTitle(e.currentTarget.innerText)} // Update title as user types
        >
          {todo.title}
        </h3>
      </div>
      {!todo.completed && edit ? (
        <Save
          size={20}
          cursor="pointer"
          onClick={editodo} // Save the updated title
        />
      ) : (
        <div className="flex gap-2 items-center">
          <Pencil
            size={20}
            cursor={todo.completed ? "not-allowed" : "pointer"}
            onClick={() => giveedit(true)} // Enable editing
          />
          <Delete
            size={20}
            cursor="pointer"
            onClick={() => dispatch(deletetodo(todo.id))}
          />
        </div>
      )}
    </div>
  );
};

export default TodoTile;
