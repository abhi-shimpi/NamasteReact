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

{/* <div id="parent">
    <div id="child1">
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
    </div>
</div> */}

const heading =  React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement(
                    "h1",
                    {id:"heading"},
                    "I am h1 tag of child1!"
                ),
                React.createElement(
                    "h2",
                    {id:"heading"},
                    "I am h2 tag of child1!"
                )
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            React.createElement(
                "h1",
                {id:"heading"},
                "I am h2 tag!"
            )
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);