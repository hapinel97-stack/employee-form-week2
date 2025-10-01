import { Routes, Route } from "react-router-dom";
import NavBar from "./components2/NavBar";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import Employees from "./pages/Employees";

export default function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </main>
    </div>
  );
}