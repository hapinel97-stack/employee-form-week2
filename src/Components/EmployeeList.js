import React from "react";
import "./EmployeeList.css";

export default function EmployeeList({ employees = [], onDelete }) {
  return (
    <div className="elist-card">
      <h2 className="elist-title">Employee List</h2>

      {employees.length === 0 ? (
        <p className="elist-empty">No employees yet. Add someone with the form.</p>
      ) : (
        <div className="elist-scroll">
          <table className="elist-table">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Email</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={emp.id ?? emp.email + idx}>
                  <td>{idx + 1}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>
                    {onDelete && (
                      <button
                        className="elist-btn danger"
                        onClick={() => onDelete(emp.id ?? emp.email)}
                        aria-label={`Delete ${emp.firstName} ${emp.lastName}`}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}