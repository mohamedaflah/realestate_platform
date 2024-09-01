import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/app/Header";
import Home from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
