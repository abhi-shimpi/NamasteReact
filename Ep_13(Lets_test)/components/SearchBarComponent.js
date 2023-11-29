import { useState } from "react";
// import search_img from "../assets/images/search.png";

export const SearchBarComponent = ({onSearchRest1,respData}) => {
    let [restNames,setRestNames] = useState([]);
    let [searchedInputValue,setSearchedInputValue] = useState("");

    const autoSuggestRest = (event) => {
        setSearchedInputValue(event.target.value);

        const autoSuggestedData = respData.filter((rest) =>{
            const name = rest.info.name.toLocaleLowerCase();
            const searchedValue = event.target.value.toLocaleLowerCase();

            if(name.includes(searchedValue)) {
                return name;
            }
        })
        setRestNames(autoSuggestedData);
        onSearchRest1(event.target.value);
    }

    return (
        <>
            <div className="search-bar">
                <form className="search-form" onSubmit={(event) => {
                    event.preventDefault();
                    onSearchRest1(event.target.children.searchedValue.value)
                }}>
                    <input data-testid="searchedValue" name="searchedValue" value={searchedInputValue
                    }  placeholder="Search here your fav restaurent" onChange={(event) => {autoSuggestRest(event)}}></input>
                    <button type="submit" value="submit" className="search-img pointer" data-testid="search-btn">
                        <img alt="search-button" src={require("../assets/images/search.png")} width="100%" height="100%" />
                    </button>
                </form>
            </div>
            <div className="auto-suggest-div">
                {
                   searchedInputValue?.length ? (
                    restNames.map((resName)=> (
                        <p  className="pointer" key={resName.info.id} 
                            style={{padding:"5px"}} 
                            onClick={()=>{setSearchedInputValue(resName.info.name)}}>
                                {resName.info.name}
                        </p>
                    ))
                   ) : (
                    <p></p>
                   )
                }
            </div>
        </>
    );
};
