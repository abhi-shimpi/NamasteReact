import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeaderComponent";
import {element,obj1} from "./HeaderComponent";
import { RestaurantContainer } from "./RestaurantContainer";
/* 
1. Header
  -Logo
  -NavItems
2.Body
  -RestaurantContainer
    -Search
    -Card
3.Footer
  -Address
  -Links
  -Contact Us

*/
// console.log(element,obj1)
const App = () => (
  <div className="homepage">
    <HeaderComponent />
    <RestaurantContainer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
