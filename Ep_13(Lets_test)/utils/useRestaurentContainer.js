import {REST_API} from "./constants";
import { useState,useEffect } from "react";

const useRestaurentContainer = () =>{
    const [respData,setRespData] = useState([]);
     // useEffect hook
     useEffect(()=>{
        // fetch method return a promise which needs to be resolved 
        // eigther we can resolve it by .then or async await
        // setKeyData("loadData");
        fetchData();
    },[])

    const fetchData = async () =>{
        // console.log("FetchData called")

        const data = await fetch(REST_API); //return a promise which contains a object
        const jsonData = await data.json();  // this json is exctracted from this object by calling json method which also returns a promise
        // console.log(json)
        const respData = jsonData?.data?.cards;
        setRespData(respData);
    }
    return respData;

}

export default useRestaurentContainer;