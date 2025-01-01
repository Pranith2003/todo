import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { addtodos } from "../../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";

const InputField = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addTodoData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = e.currentTarget.todo.value.trim();
    if (todo) {
      const id = crypto.randomUUID();
      const title = todo;
      const completed = false;

      dispatch(addtodos({ id, title, completed }));

      toast({
        title: "Todo Create Successfully",
        variant: "success",
      });
      e.currentTarget.reset();

      return;
    }
    toast({
      title: "Title Can't be Empty",
      variant: "destructive",
    });
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
