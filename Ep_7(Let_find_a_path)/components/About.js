
const About = () => {
  return (
    <h1>About</h1>
  )
}

export default About

import { useState,useEffect } from "react";    

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
