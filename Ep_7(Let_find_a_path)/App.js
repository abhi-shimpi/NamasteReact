import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import {element,obj1} from "./components/HeaderComponent";
import { RestaurantContainer } from "./components/RestaurantContainer";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import { Contact } from "./components/Contact";
import {Error} from "./components/Error";
import { RestaurentMenu } from "./components/RestaurentMenu.js";
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
    <Outlet/>
  </div>
);

// Routes
const appRouter = createBrowserRouter(
  [
    {
      path:'/',
      element:<App></App>,
      errorElement:<Error/>,
      children: [
        {
          path:'/',
          element:<RestaurantContainer/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/restaurant/:resId',
          element:<RestaurentMenu/>
        },
      ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
