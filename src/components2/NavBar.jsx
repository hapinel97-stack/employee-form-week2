import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav">
      <div className="brand">INT304 Final</div>
      <nav>
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/add" className="link">Add Employee</NavLink>
        <NavLink to="/employees" className="link">Employees</NavLink>
      </nav>
    </header>
  );
}