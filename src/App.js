import React, { Component } from "react";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";
import "./App.css";

const STORAGE_KEY = "employees";

class App extends Component {
  state = { employees: [] };

  componentDidMount() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) this.setState({ employees: parsed });
    } catch (e) { console.error(e); }
  }

  componentDidUpdate(_, prev) {
    if (prev.employees !== this.state.employees) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.employees));
    }
  }

  handleAdd = (emp) => {
    const withId = { ...emp, id: `${Date.now()}-${Math.random().toString(16).slice(2)}` };
    this.setState((s) => ({ employees: [withId, ...s.employees] }));
  };

  handleDelete = (id) => {
    this.setState((s) => ({ employees: s.employees.filter((e) => e.id !== id) }));
  };

  render() {
    const { employees } = this.state;

    return (
      <main className="app-container">
        <h1 className="app-title">Employee Management System</h1>

        <section className="app-grid">
          <div className="app-col">
            <EmployeeForm onAdd={this.handleAdd} />
          </div>
          <div className="app-col">
            <EmployeeList employees={employees} onDelete={this.handleDelete} />
          </div>
        </section>
      </main>
    );
  }
}

export default App;