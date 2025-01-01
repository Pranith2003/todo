import InputField from "./components/custom/InputField";
import TodoDisplay from "./components/custom/TodoDisplay";
function App() {
  return (
    <>
      <div className="sm:w-[40vw] h-screen mx-auto p-10">
        <InputField />
        <TodoDisplay />
      </div>
    </>
  );
}

export default App;
