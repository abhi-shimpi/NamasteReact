import { SearchBarComponent } from "./SearchBarComponent";
import { RestaurantCardsContainer } from "./RestaurantCardsContainer";
import useRestaurentContainer from "../utils/useRestaurentContainer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Carousel from "./Carousel";

/* 
-Here we are maintaining two variables one is listOfRestaurents and respData
-listOfRestaurents is data that we are passing to different components normally 
 or when we perform some operations so it can get changed.
-So we need to mainitain original response data to reduce API calls so we are maitaining 
    state of respData.

*/

export const RestaurantContainer = () => {
    let [listOfRestaurents, setListOfRestaurents] = useState([]);

    const onlineStatus = useOnlineStatus();

    // UseState
    const [keyData, setKeyData] = useState('loadData')

    const response = useRestaurentContainer();
    const respData = response[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   
    console.log("RespData in RestCOntainer",respData);
    useEffect(() => {
        setListOfRestaurents(respData);
        // console.log("listOfRestaurents",listOfRestaurents);
    }, [respData])

    // React is fast in DOM Munipalation
    const getTopRatedRest = () => {
        const data = respData;
        const filteredData = data.filter((rest) => {
            const rating = rest.info.avgRating;
            return rating > 4.0
        });
        // respData = JSON.parse(JSON.stringify(filteredData));
        // listOfRestaurents = respData; This won't work
        setListOfRestaurents(filteredData);
    }

    const onSearchRest = (childData) => {
        setKeyData("onSearchData");
        if (childData) {
            const data = respData;
            const searchedData = data.filter((rest) => {
                const nameOfRest = rest.info.name.toLowerCase();
                if (nameOfRest.includes(childData.toLowerCase())) return rest;
            });
            setListOfRestaurents(searchedData);
        } else {
            setListOfRestaurents(respData);
        }
    }

    if (!onlineStatus) {
        return <h2>Opps! You are offline</h2>
    }

    return (
        <div className="restaurant-container">
            {/* {console.log("RestCOntainer rendered",keyData)} */}
            {/* Here we are passing a function as props to it child component and in child component 
                we are passing a argument to parent onSearchrest function
            */}
            <SearchBarComponent onSearchRest1={onSearchRest} respData={respData} />
            <Carousel carauselData={response[0]?.card?.card} ></Carousel>
            <Carousel carauselData={response[1]?.card?.card} ></Carousel>
            <div className="filters-wrapper">
                <button className="pointer" onClick={() => { getTopRatedRest() }}>Top Rated Restaurents</button>
            </div>
            {/* <button onClick={getTopRatedRest}>Top rated restaurant</button> */}
            <RestaurantCardsContainer respData={listOfRestaurents} keyData={keyData} />
        </div>
    );
}