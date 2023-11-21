import { useState } from "react";
import search_img from "../assets/images/search.png";

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
            <div className="p-6 w-80 justify-center ">
                <form className="flex justify-between items-center" onSubmit={(event) => {
                    event.preventDefault();
                    onSearchRest1(event.target.children.searchedValue.value)
                }}>
                    <input className="w-[80%] text-lg border-none bg-white outline-none" name="searchedValue" value={searchedInputValue
                    }  placeholder="Search here your fav restaurent" onChange={(event) => {autoSuggestRest(event)}}></input>
                    <button type="submit" value="submit" className="w-[40px] h-[30px] border-none bg-white pointer">
                        <img src={search_img} className="w-12 h-12" />
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
