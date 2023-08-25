
// <div id="parent">
    // <div id="child">
    //     <h1>I am h1 tag</h1>
    // </div>
// </div>

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
                    "h1",
                    {id:"heading"},
                    "I am h1 tag of child2!"
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