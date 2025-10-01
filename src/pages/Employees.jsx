import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeEmployee, clearAll } from "../features/employees/employeeSlice";

export default function Employees() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.employees.list);
  const [q, setQ] = useState("");

  const filtered = list.filter((e) =>
    `${e.firstName} ${e.lastName} ${e.email} ${e.department ?? ""}`
      .toLowerCase()
      .includes(q.toLowerCase())
  );

  return (
    <section className="card">
      <div className="row">
        <h2>Employees</h2>
        <button className="btn ghost" onClick={() => dispatch(clearAll())}>
          Clear All
        </button>
      </div>

      <input
        placeholder="Search employees"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ marginTop: 12, marginBottom: 12, width: "100%" }}
      />

      {filtered.length === 0 ? (
        <p>No {q ? "matches" : "employees"} yet.</p>
      ) : (
        <ul className="list">
          {filtered.map((emp) => (
            <li key={emp.id} className="list-item">
              <div>
                <strong>
                  {emp.firstName} {emp.lastName}
                </strong>
                <div className="sub">
                  {emp.email} • {emp.department || "—"}
                </div>
              </div>
              <button
                className="btn danger"
                onClick={() => dispatch(removeEmployee(emp.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}