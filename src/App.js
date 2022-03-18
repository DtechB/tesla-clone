import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ModelS from "./pages/ModelS";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:title" element={<ModelS />} />
      </Routes>
    </div>
  );
}

export default App;
