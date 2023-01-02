import React from "react";
import ReactDOM from "react-dom/client";

const app_root = document.getElementById("root");
const heading = React.createElement(
  "h1",
  {
    className: "test",
    id: "title",
    style: {
      color: "red",
      textAlign: "center",
    },
  },
  "Namaste ",
  React.createElement(
    "i",
    {
      style: {
        color: "blue",
      },
    },
    "React!"
  )
);
const para = React.createElement(
  "p",
  {
    style: {
      textAlign: "center",
      fontSize: "1.5rem",
    },
  },
  "From ZERO...To HERO"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  para,
]);
console.log(container);
const root = ReactDOM.createRoot(app_root);
root.render(container);
