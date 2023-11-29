import { Outlet } from "react-router-dom";
import User from "./User";
import {UserClass} from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor() {
    super();
    console.log("Parent construcor called")
  }

  componentDidMount() {
    console.log("Parent componentDidMount called")
  }

  render () {
    console.log("Parent render called")
    return (
      <>
         <h1>About</h1>
         <h3>User : {
            <UserContext.Consumer>
             {
               (data) => (
                  // console.log(data)
                  <span>{data.loggedInUser}</span>
               )
             }
            </UserContext.Consumer>
          }</h3>
         <UserClass name={"First class 1"} location={"amalner class"} contact={"abhi@gmail.com class"}/>
         <Outlet/>
         {/* <UserClass name={"Second class"} location={"amalner class"} contact={"abhi@gmail.com class"}/> */}
      </>
    )
  }
}

export default About

// import { useState,useEffect } from "react";    

// const About = () => {
//     const [count, setCount] = useState(0);
    
//       useEffect(() => {
//         const intervalId = setInterval(() => {
//           setCount(count + 1);
//         }, 1000);
    
//         console.log(count)

//         return () => {
//           clearInterval(intervalId);
//         };
//       },[]); // Missing dependency array
    

//       return (
//         <div>
//           <p>Count: {count}</p>
//           <button onClick={() => setCount(count + 1)}>
//             Increase count
//           </button>
//         </div>
//       );
// }

// export default About
