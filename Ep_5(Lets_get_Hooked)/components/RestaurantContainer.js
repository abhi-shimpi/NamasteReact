import { SearchBarComponent } from "./SearchBarComponent";
import { RestaurantCardsContainer } from "./RestaurantCardsContainer";
import response from "../utils/response_data";
import { useState } from "react";

let respData = response.sections.SECTION_SEARCH_RESULT;

export const RestaurantContainer = () => {
    let arr = useState(respData);

    // let [listOfRestaurents,setListOfRestaurents] = arr; -> Its nothing but array destructuring
    const listOfRestaurents = arr[0];
    const setListOfRestaurents = arr[1];
    // console.log(arr);

    // React is fast in DOM Munipalation
    const getTopRatedRest = () => {
        const filteredData = respData.filter((rest)=>{
            const rating = rest.info.rating.aggregate_rating;
            return rating > 4.0
        });
        // respData = JSON.parse(JSON.stringify(filteredData));
        // listOfRestaurents = respData; This won't work
        setListOfRestaurents(filteredData);
        // console.log(respData);
    }

    const onSearchRest = (childData) =>{
        console.log("childData",childData);
        if(childData) {
            const searchedData = respData.filter((rest)=>{
                const nameOfRest = rest.info.name.toLowerCase();
                if(nameOfRest == childData.toLowerCase()) return rest;
            });
            setListOfRestaurents(searchedData);
        } else {
            setListOfRestaurents(respData);
        }
    }
    
    return (
        <div className="restaurant-container">
          <SearchBarComponent onSearchRest={onSearchRest}/>
          {/* <button onClick={getTopRatedRest}>Top rated restaurant</button> */}
          <RestaurantCardsContainer respData={listOfRestaurents}/>
        </div>
      );
}