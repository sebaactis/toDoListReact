import MainContainer from "./components/MainContainer";
import TaskProvider from "./context/TaskContext"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checks from "./components/Checks";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Routes>

          <Route path="/" element={<MainContainer />} />
          <Route path="/checks" element={<Checks />}  />

        </Routes>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
