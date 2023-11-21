import React, { Children, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/HeaderComponent";
// import { element, obj1 } from "./components/HeaderComponent";
import { RestaurantContainer } from "./src/components/RestaurantContainer";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import { Contact } from "./src/components/Contact";
import { Error } from "./src/components/Error";
import { RestaurentMenu } from "./src/components/RestaurentMenu.js";
// import Grocery from "./components/Grocery";
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
  <div className="no-underline text-inherit">
    <HeaderComponent />
    <Outlet />
  </div>
);

const Grocery = lazy(()=>{
  return import("./src/components/Grocery")
});

// Routes
const appRouter = createHashRouter(
  [
    {
      path: '/',
      element: <App></App>,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <RestaurantContainer />
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/grocery',
          element: 
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery/>
          </Suspense>
        },
        {
          path: '/restaurant/:resId',
          element: <RestaurentMenu />
        },
      ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
