import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className="button is-rounded my-class is-danger is-small">
          Log In
        </button>
        <button className="button is-small is-success"> Sign Up</button>
      </div>
    );
  }
}
