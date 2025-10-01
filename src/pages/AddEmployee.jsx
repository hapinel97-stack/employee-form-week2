import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/employees/employeeSlice";

export default function AddEmployee() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const [error, setError] = useState("");

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email) {
      setError("First name, last name, and email are required.");
      return;
    }
    setError("");
    dispatch(addEmployee(form));
    setForm({ firstName: "", lastName: "", email: "", department: "" });
  }

  return (
    <section className="card">
      <h2>Add Employee</h2>
      <form onSubmit={onSubmit} className="grid" noValidate>
        <input
          name="firstName"
          placeholder="First name"
          value={form.firstName}
          onChange={onChange}
        />
        <input
          name="lastName"
          placeholder="Last name"
          value={form.lastName}
          onChange={onChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={onChange}
        />
        <button className="btn" type="submit">Save</button>
      </form>
      {error && <p className="sub" style={{ marginTop: 6 }}>{error}</p>}
    </section>
  );
}