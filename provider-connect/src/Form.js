import React from "react";
import "./App.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      npiNumber: "",
      businessAddress: "",
      telephoneNumber: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, prop) {
    this.setState({ [prop]: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Provider Input</h1>
        <form>
          <label>First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={(e) => this.handleChange(e, "firstName")}
          ></input>
          <br></br>
          <label>Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={(e) => this.handleChange(e, "lastName")}
          ></input>
          <br></br>
          <label>NPI Number</label>
          <input
            type="text"
            value={this.state.npiNumber}
            onChange={(e) => this.handleChange(e, "npiNumber")}
          ></input>
          <br></br>
          <label>Business Address</label>
          <input
            type="text"
            value={this.state.businessAddress}
            onChange={(e) => this.handleChange(e, "businessAddress")}
          ></input>
          <br></br>
          <label>Telephone Number</label>
          <input
            type="tel"
            value={this.state.telephoneNumber}
            onChange={(e) => this.handleChange(e, "telephoneNumber")}
          ></input>
          <br></br>
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e, "email")}
          ></input>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;
