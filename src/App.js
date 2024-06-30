import "./App.css";
import AddTask from "./componets/AddTask";
import TaskList from "./componets/TaskList";
import { TasksProvider } from "./componets/TasksContext";

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <h1>Todo list</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}

export default App;
