import React, { Component } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("First Constructor");
  }

  componentDidMount() {
    console.log("Child Mounting");
  }
  render() {
    console.log("first render");
    return (
      <div className="user-card">
        {/* <h1>Count - {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <h2>{this.props.name}</h2>
        <h3>{this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
