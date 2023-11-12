import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import {element,obj1} from "./components/HeaderComponent";
import { RestaurantContainer } from "./components/RestaurantContainer";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from "./components/About";
import { Contact } from "./components/Contact";
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

// Routes
const appRouter = createBrowserRouter(
  [
    {
      path:'/',
      element:<App></App>,
      errorElement:<Error/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
