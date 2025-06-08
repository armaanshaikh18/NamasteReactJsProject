import React from "react";
import ReactDOM from "react-dom/client";

const haeding = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is an H1 tag of armaan"),
    React.createElement("h2", {}, "This is an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is an H1 tag"),
    React.createElement("h2", {}, "This is an H2 tag"),
  ]),
]);

// console.log(haeding);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(haeding);
