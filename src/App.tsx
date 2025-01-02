import InputField from "./components/custom/InputField";
import { ThemeProvider } from "./components/custom/ThemeProvider";
import TodoDisplay from "./components/custom/TodoDisplay";
import { ModeToggle } from "./components/custom/Toggle";
import { Toaster } from "./components/ui/toaster";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="flex justify-center pt-[5px]">
          <ModeToggle />
        </div>
      </ThemeProvider>
      <Toaster />
      <div className="sm:w-[40vw] h-screen mx-auto p-10">
        <InputField />
        <TodoDisplay />
      </div>
    </>
  );
}

export default App;
