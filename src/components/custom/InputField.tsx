import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { addtodos } from "../../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

const InputField = () => {
  const dispatch = useDispatch();

  const addTodoData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = e.currentTarget.todo.value.trim();
    if (todo) {
      const id = crypto.randomUUID().toString();
      const title = todo.title;
      const completed = false;

      dispatch(addtodos({ id, title, completed }));

      e.currentTarget.reset();

      return;
    }
  };

  return (
    <>
      <form className="flex flex-1 gap-5 mt-32" onSubmit={addTodoData}>
        <Input type="text" name="todo" placeholder="Enter the Todo" />
        <Button> Add Todo </Button>
      </form>
    </>
  );
};

export default InputField;
