import React from "react";
import ReactDOM from "react-dom/client";

// // React.createElement => Object => HTMLElement(render)

// // const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// //JSX (Transpiled before it reaches the JS) - Parcel - Babel
// //JSX =>Babel transpiles it to React.createElement => ReactElement => JS Object => HTMLElement(render)
// const jsxHeading = <h1 id="heading">This is JSX heading</h1>;
// // console.log(heading);
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//  React Component

const Title = () => {
  return <h1 id="heading">Namaste React JS through Title Component</h1>;
};

const Heading = () => {
  return (
    <div id="container">
      <Title />
      <h1>This is a React Heading Component </h1>
    </div>
  );
};

root.render(<Heading />);
