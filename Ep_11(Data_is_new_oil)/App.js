import React, { Children, Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import { element, obj1 } from "./components/HeaderComponent";
import { RestaurantContainer } from "./components/RestaurantContainer";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurentMenu } from "./components/RestaurentMenu.js";
import UserContext from "./utils/UserContext";
import UserContextDummy from "./utils/UserContextDummy";
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
const Grocery = lazy(() => {
  return import("./components/Grocery")
});

const App = () => {

    const [userName, setUserName] = useState("");

    // authentication
    useEffect(() => {
      // Make API call to authenticate user
      const data = {
        name: "Abhishek Shimpi"
      }
      setUserName(data.name);
    },[])

    return (
      // Outside loggedInUser will be Default user
      <UserContext.Provider value={{loggedInUser:userName}}>
        <div className="homepage">
        <UserContextDummy.Provider value={{loggedOutUser:"Akshay"}}>
          <HeaderComponent />
        </UserContextDummy.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    )
}


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
              <Grocery />
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
