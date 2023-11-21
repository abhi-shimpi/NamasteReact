
/*
- Whevener you are creating hook think in contract form like
  -Input (what i/p you need to give to your hook)
  -output(what output will be given  by your hook)
*/

import { useEffect, useState } from "react"

function useOnlineStatus() {
  const  [onlineStatus,setOnlineStatus] = useState(true);
//   let onlineStatus = "true";
  console.log("outside",onlineStatus);

  useEffect(()=>{
    window.addEventListener('offline',()=>{
        setOnlineStatus(false);
        // onlineStatus = "false"
    })

    window.addEventListener('online',()=>{
        setOnlineStatus(true);
        // onlineStatus = "true";
    })

    console.log("Inside",onlineStatus);
  },[onlineStatus])

  return onlineStatus;
}

export default useOnlineStatus