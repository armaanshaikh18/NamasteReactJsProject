import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/food img.jpg";
import foodLogo from "./images/biryani.jpg";

// const haeding = React.createElement("div", { id: "container" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is an H1 tag of armaan"),
//     React.createElement("h2", {}, "This is an H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "This is an H1 tag"),
//     React.createElement("h2", {}, "This is an H2 tag"),
//   ]),
// ]);
const Heading = () => {
  return (
    <div className="header-main">
      <div className="img-logo">
        <img className="logo" src={logo} alt="foodLogo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Orders</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return(
  <div className="res-items">
    <img className="foodLogo" src={foodLogo} alt="foods-items" />
    <h3>Sahara Hotel</h3>
    <h4>biryani,Indian,Rice</h4>
    <h4>4.5 Stars</h4>
  </div>
  )
};

const BodyMain = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-container">
      <Heading />
      <BodyMain />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
