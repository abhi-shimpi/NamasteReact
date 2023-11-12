import { useState } from "react";
import search_img from "../assets/images/search.png";
import response from "../utils/response_data";

let respData = response.sections.SECTION_SEARCH_RESULT;

export const SearchBarComponent = ({onSearchRest}) => {
    let [restNames,setRestNames] = useState([]);
    let [searchString,setSearchString] = useState("");
    let [inputValue,setInputValue] = useState("");

    const autoSuggestRest = (event) => {
        console.log("event : ",event);
        const autoSuggestedData = respData.filter((rest) =>{
            const name = rest.info.name.toLocaleLowerCase();
            setSearchString(event.target.value);
            const searchedValue = event.target.value.toLocaleLowerCase();

            if(name.includes(searchedValue)) {
                console.log(name);
                return name;
            }
        })
        console.log(autoSuggestedData);
        setRestNames(autoSuggestedData);
        console.log("restNames",restNames)
    }

    return (
        <>
            <div className="search-bar">
                <form className="search-form" onSubmit={(event) => {
                    event.preventDefault();
                    onSearchRest(event.target.children.searchedValue.value)
                }}>
                    <input name="searchedValue"  placeholder="Search here your fav restaurent" onKeyDown={(event) => {autoSuggestRest(event)}}></input>
                    <button type="submit" value="submit" className="search-img pointer">
                        <img src={search_img} width="100%" height="100%" />
                    </button>
                </form>
            </div>
            <div className="auto-suggest-div">
                {
                   searchString.length ? (
                    restNames.map((resName)=> (
                        <p key={resName.id} style={{padding:"5px"}}>{resName.info.name}</p>
                    ))
                   ) : (
                    <p></p>
                   )
                }
            </div>
        </>
    );
};
