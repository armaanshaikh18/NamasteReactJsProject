import React, { Component } from "react";
import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
import UserLogin from "../utils/UserLogin";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Armaan Class based component",
        name2: "Armaan Shaikh",
        location: "Mumbai",
        location2: "Navi Mumbai",
      },
    };

    console.log("Parent Constructor");
  }

  async componentDidMount() {
    console.log("Parent Mounting");

    // this.timer = setInterval(() => {
    //   console.log("Timeout Interval");
    // }, 1000);
    // const data = await fetch("https://api.github.com/users/akshaymarch7");
    // const json = await data.json();

    // this.setState({
    //   userInfo: json,
    // });
    // console.log(json);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    clearInterval(this.timer);
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <span>
          Login User :
          <UserLogin.Consumer>
            {({ userLogin }) => <h4>{userLogin}</h4>}
          </UserLogin.Consumer>
        </span>
        <UserClass
          name={this.state.userInfo.name}
          location={this.state.userInfo.location}
        />
        <UserClass
          name={this.state.userInfo.name2}
          location={this.state.userInfo.location2}
        />

        {/* <UserFunction /> */}
      </div>
    );
  }
}

export default About;
