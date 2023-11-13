import { SearchBarComponent } from "./SearchBarComponent";
import { RestaurantCardsContainer } from "./RestaurantCardsContainer";
import { useEffect, useState } from "react";
import payload from '../utils/payload';
import { Shimmer } from "./Shimmer";

/* 
-Here we are maintaining two variables one is listOfRestaurents and respData
-listOfRestaurents is data that we are passing to different components normally 
 or when we perform some operations so it can get changed.
-So we need to mainitain original response data to reduce API calls so we are maitaining 
    state of respData.

*/
 
export const RestaurantContainer = () => {
    let arr = useState([]);

    // let [listOfRestaurents,setListOfRestaurents] = arr; -> Its nothing but array destructuring
    const listOfRestaurents = arr[0];
    const setListOfRestaurents = arr[1];

    // UseState
    const [keyData,setKeyData] = useState('')
    const [respData,setRespData] = useState([])

    console.log("RestaurantCardsContainer")

    // useEffect hook
    useEffect(()=>{
        // fetch method return a promise which needs to be resolved 
        // eigther we can resolve it by .then or async await
        setKeyData("loadData");
        fetchData();
        console.log("UseEffect called")
    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        const respData = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurents(respData);
        setRespData(respData);
    }


    // React is fast in DOM Munipalation
    const getTopRatedRest = () => {
        const data = respData;
        const filteredData = data.filter((rest)=>{
            const rating = rest.info.rating.aggregate_rating;
            return rating > 4.0
        });
        // respData = JSON.parse(JSON.stringify(filteredData));
        // listOfRestaurents = respData; This won't work
        setListOfRestaurents(filteredData);
    }

    const onSearchRest = (childData) =>{
        setKeyData("onSearchData");
        if(childData) {
            const data = respData;
            const searchedData = data.filter((rest)=>{
                const nameOfRest = rest.info.name.toLowerCase();
                if(nameOfRest.includes(childData.toLowerCase())) return rest;
            });
            setListOfRestaurents(searchedData);
        } else {
            setListOfRestaurents(respData);
        }
    }
    
    // if(!listOfRestaurents.length) {
    //     return <Shimmer/>
    // }

    return (
        <div className="restaurant-container">
            {/* Here we are passing a function as props to it child component and in child component 
                we are passing a argument to parent onSearchrest function
            */}
          <SearchBarComponent onSearchRest1={onSearchRest} respData={respData}/> 
          {/* <button onClick={getTopRatedRest}>Top rated restaurant</button> */}
          <RestaurantCardsContainer respData={listOfRestaurents} keyData={keyData}/>
        </div>
      );
}