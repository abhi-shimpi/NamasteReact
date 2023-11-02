import React from "react";
import ReactDOM from "react-dom";
import logo_img from "./images/logo.avif"
import user_img from "./images/user.webp"
import search_img from "./images/search.png"

const HeaderComponent = () => (
    <div className="header">
        <div className="logo img-height-width">
            <img
                src={logo_img}
                width="100%" height="100%"
            />
        </div>
        <div className="search-bar">
            <input placeholder="Search here"></input>
            <div className="search-img">
                <img
                    src={search_img}
                    width="100%" height="100%"
                />
            </div>
        </div>
        <div className="user-icon img-height-width">
            <img
                src={user_img}
                width="100%" height="100%"
            />
        </div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent></HeaderComponent>);
