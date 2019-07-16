import React, { Component } from "react";
import "./Style.css";
import Form from "./Form";
import Navbar from "./Navbar";
import Button from "./Button";
import Message from "./Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Ani and Bianca </h1>
        <Navbar />
        <Form label="Name" />
        <Form label="Email" />
        <Form label="Password" />
        <Button />
        <Message />
      </div>
    );
  }
}

export default App;
