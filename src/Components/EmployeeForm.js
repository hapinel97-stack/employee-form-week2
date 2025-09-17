import React, { Component } from "react";
import "../EmployeeForm.css";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
      employees: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Load any previously saved list from localStorage (safely)
    const stored = localStorage.getItem("employees");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this.setState({ employees: parsed });
        }
      } catch {
        // If parse fails, clear the bad value so it doesn't keep crashing
        console.warn("Invalid employees JSON in localStorage. Clearing it.");
        localStorage.removeItem("employees");
      }
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { firstName, lastName, email, department, employees } = this.state;

    if (!firstName || !lastName || !email || !department) {
      alert("Please fill out all fields.");
      return;
    }

    const newEmployee = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      department: department.trim()
    };

    const updated = [...employees, newEmployee];

    // Set state and then persist to localStorage
    this.setState(
      {
        employees: updated,
        firstName: "",
        lastName: "",
        email: "",
        department: ""
      },
      () => {
        localStorage.setItem("employees", JSON.stringify(this.state.employees));
        alert("Employee added and saved!");
      }
    );
  }

  render() {
    const { firstName, lastName, email, department, employees } = this.state;

    return (
      <div className="employee-form">
        <h2>New Employee Form</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="department">Department</label>
          <input
            id="department"
            name="department"
            type="text"
            value={department}
            onChange={this.handleChange}
            placeholder="ex: Operations"
            required
          />

          <button type="submit">Add Employee</button>
        </form>

        <h3>Employee List</h3>
        <ul>
          {employees.map((emp, idx) => (
            <li key={idx}>
              {emp.firstName} {emp.lastName} — {emp.email} — {emp.department}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeForm;