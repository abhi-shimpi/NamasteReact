
import React from "react";
import ReactDOM from "react-dom/client";

// Using createElement
const headerElement = React.createElement(
    "div",
    {class:"title"},
    [
        React.createElement("h1",{},"This is h1"),
        React.createElement("h2",{},"This is h2"),
        React.createElement("h3",{},"This is h3")
    ]
);

// Using JSX
const jsxHeaderElement = (
    <div className="title">
        <h1>This is h1</h1>
        <h2>This is h2</h2>
        <h3>This is h3</h3>
    </div>
)

// Using functional component
const HeadingComponent = () => (
    <div className="title">
        {jsxHeaderElement}
        <h1>This is h1</h1>
        <h2>This is h2</h2>
        <h3>This is h3</h3>
    </div>
)

const SideBarComponent = () => (
    <div className="sidebar">
        <h1>This is sidebar</h1>
        <HeadingComponent></HeadingComponent>
    </div>
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<SideBarComponent></SideBarComponent>);


const title = "Title";
 
const TitleComponent = () => <h1>This is title component</h1>

const TitleRegularComponent = () => (
    <div>
        {title}
        <TitleComponent/>
        {/* We write it like a regular component also */}
        <h1>This is title regular component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TitleRegularComponent></TitleRegularComponent>);
 {/* We write it like a single pair component also */}