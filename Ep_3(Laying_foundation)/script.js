// const heading  = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World from React!"
// );  //Creating an element

// const root  = ReactDOM.createRoot(document.getElementById('root'));  // Creating an root

// root.render(heading) //appending heading inside root
// <div id="parent">
// <div id="child">
//     <h1>I am h1 tag</h1>
// </div>
// </div>

{
  /* <div id="parent">
    <div id="child1">
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
    </div>
</div> */
}

import React from "react";
import ReactDOM from "react-dom/client";

// .React.createElement => ReactElement - JSObject => HTMLElement(render)
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "I am h1 tag of child1!"),
    React.createElement("h2", { id: "heading" }, "I am h2 tag of child1!"),
  ]),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", { id: "heading" }, "I am h2 tag!")
  ),
]);

console.log(heading);

// JSX => .React.createElement => ReactElement - JSObject => HTMLElement(render)
// React Element
const jsxHeading = (
  <h1 className="root" tabIndex={1}>
    Abhishek is here
  </h1>
);
console.log(jsxHeading);

const SubTitle = () => (
  <div>
    <h2>This is subTitle</h2>
  </div>
);

let items = [1, 2, 3];

// React functional component
const HeadingComponent = () => (
  <div>
    {
      <div>
        {items.map((index) => (
          <SubTitle key={index}></SubTitle>
        ))}
      </div>
    }
    {jsxHeading}
    <h1>This is heading component</h1>
  </div>
);

//We can use function keyword while creating Functional component
// const HeadingComponent2 = function () {
//   return (
//     <div>
//       <SubTitle />
//       {jsxHeading}
//       <h1>This is heading component</h1>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
