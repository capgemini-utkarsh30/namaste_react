import React from "react";
import ReactDOM from "react-dom/client";

{
  /* <div id="parent">
    <div id="child">
        <h1>This is react H1 Tag</h1>
        <h1>This is second args</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement("h1", {}, "This is react H1 Tag"),
      React.createElement("h2", {}, "This is second args"),
    ]
  )
);

// const heading = React.createElement("h1", {} , "This is react H1 Tag");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
