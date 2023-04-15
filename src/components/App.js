import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
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
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Main />} />
          <Route path="/new-task" element={<NewTask />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
