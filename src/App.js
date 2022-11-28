import MainContainer from "./components/MainContainer";
import TaskProvider from "./context/TaskContext"

function App() {
  return (
    
    <TaskProvider >

      <MainContainer />

    </TaskProvider >

  );
}

export default App;
