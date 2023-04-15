import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Register from "./Register";
import Login from "./Login";
import Main from "./Main";
import NewTask from "./NewTask";
function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-task" element={<NewTask />} />
      </Routes>
    </div>
  );
}

export default App;
