import React, { Component } from "react";
import "./EmployeeForm.css";

class EmployeeForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    department: ""
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, department } = this.state;
    if (!firstName || !lastName || !email || !department) {
      alert("Please fill in all fields");
      return;
    }
    if (this.props.onAdd) {
      this.props.onAdd({ firstName, lastName, email, department });
    }
    this.setState({ firstName: "", lastName: "", email: "", department: "" });
  };

  render() {
    const { firstName, lastName, email, department } = this.state;
    return (
      <div className="eform-card">
        <h2 className="eform-title">Add Employee</h2>
        <form onSubmit={this.handleSubmit} className="eform-form">
          <label>
            First Name
            <input name="firstName" value={firstName} onChange={this.handleChange} />
          </label>
          <label>
            Last Name
            <input name="lastName" value={lastName} onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
          <label>
            Department
            <input name="department" value={department} onChange={this.handleChange} />
          </label>
          <button className="eform-btn" type="submit">Save Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;