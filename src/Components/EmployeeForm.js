import React, { Component } from "react";
import "../EmployeeForm.css";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      department: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("New Employee Data:", this.state);
    alert("Employee added successfully!");
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      department: ""
    });
  }

  render() {
    const { firstName, lastName, email, department } = this.state;

    return (
      <form className="employee-form" onSubmit={this.handleSubmit}>
        <h2>New Employee Form</h2>

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
        />

        <button type="submit">Add Employee</button>
      </form>
    );
  }
}

export default EmployeeForm;