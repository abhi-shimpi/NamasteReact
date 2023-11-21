import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { json, useParams } from "react-router-dom";
import delivery_icon from "../assets/images/delivery_icon.png";
import rating_img from "../assets/images/rating_img.png";
import down_arrow from "../assets/images/down_arrow.png";
import offer_img from "../assets/images/offer_img.png";
import non_veg_img from "../assets/images/non_veg_img.png";
import veg_img from "../assets/images/veg_img.png";
import {img_url} from "../utils/constants";
import MenuShimmer from "./MenuShimmer";

export const RestaurentMenu = () => {
    const [menuItems,setMenuItems] = useState([]);
    const [restDetails,setRestDetails] = useState({});
    const [offerDetails,setOfferDetails] = useState([]);

    console.log(useState());

    useEffect(()=>{
        fetchData();
        console.log("useEffect")
    },[])

    const fetchData = async()=>{
        const responseData = await fetch(MENU_API + resId);
        const jsonData = await responseData.json();
        setRestDetails(JSON.parse(JSON.stringify(jsonData?.data?.cards[0]?.card?.card?.info)));
        setOfferDetails(JSON.parse(JSON.stringify(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers)));
      
        const menuItemsCategoryWise = JSON.parse(JSON.stringify(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards));
        menuItemsCategoryWise.splice(0,1);
        menuItemsCategoryWise.splice(menuItemsCategoryWise.length-2,2);
        setMenuItems(menuItemsCategoryWise);
    }

    const {resId} = useParams();

    const getMenuItems = (classname) => {
        const accordianDiscp = document.getElementsByClassName(classname);
        if(accordianDiscp[0].style.display === "none") {
            accordianDiscp[0].style.display = "block";
        } else {
            accordianDiscp[0].style.display = "none";
        }
    }

    if(menuItems.length===0) {
        return <MenuShimmer/>
    }

    return (
        <div className="rest-menu">
            <div className="rest-menu-details">
                <div className="rest-details-container">
                    <div className="rest-details">
                        <div className="rest-name">
                            {console.log("In Component")}
                            <h2 className="marg-bottom-8">{restDetails?.name}</h2>
                            <p>{restDetails?.cuisines?.join(",")}</p>
                            <p>{restDetails?.locality},{restDetails?.areaName}</p>
                        </div>
                        <div className="rating-container">
                            <div className="rating">
                                <div className="pad-10 avg-rating">
                                    <div className="rating-img">
                                        <img src={rating_img} alt="rating"></img>
                                    </div>
                                    <p>{restDetails?.avgRating}</p>
                                </div>
                                <p className="pad-10 ">{restDetails?.totalRatingsString}</p>
                            </div>
                        </div> 
                    </div>
                    <div className="rest-message">
                        <div className="delivery_image">
                            <img src={delivery_icon} alt="delivery-icon"></img>
                        </div>
                        <p>{restDetails?.feeDetails?.message}</p>
                    </div>
                </div>
                <div className="offers">
                   {
                    offerDetails?.map((offer)=>(
                        <div key={offer?.info?.offerIds[0]} className="offer-card">
                            {
                                offer.info?.offerTag ? (
                                    <div style={{color:offer.info.offerTagColor}} className="deal">
                                        {offer.info.offerTag}
                                    </div>
                                ) : (
                                    <span></span>
                                )
                            }
                            <div className="offer-details">
                                <div className="offer-header">
                                    <div style={{width:'18px',height:'18px'}}>
                                        <img src={offer_img} alt="offer image" style={{width:'100%',height:'100%'}}></img>
                                    </div>
                                    <h3>{offer.info.header}</h3>
                                </div>
                                <div className="sub-details">
                                    <p>{offer.info.couponCode}</p>
                                    <p>|</p>
                                    <p>{offer.info.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                   }
                </div>  
                <div className="menu-items">
                   {
                     menuItems.map((menuItem,index)=>(
                        menuItem?.card?.card?.itemCards ? (
                            <div key={menuItem?.card?.card?.title} className="accordian">
                                <div className="accordian-title pointer" onClick={()=>{
                                        getMenuItems(menuItem?.card?.card?.title.split(" ").join(""))
                                    }}>
                                    <h3>{menuItem?.card?.card?.title}</h3>
                                    <div style={{width:'25px',height:'25px'}}>
                                        <img  style={{width:'100%',height:'100%'}} src={down_arrow} alt=""></img>
                                    </div>
                                </div>
                                <div className={menuItem?.card?.card?.title.split(" ").join("")}>
                                    {
                                        menuItem?.card?.card?.itemCards.map((menu)=>(
                                            <div key={menu?.card?.info?.id} className="menu-card">
                                                <div className="veg-classifier">
                                                    {
                                                        menu?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ?
                                                        (<img className="image" src={non_veg_img} alt="Non Veg Image"></img>) :
                                                        (<img className="image" src={veg_img} alt="Veg Image"></img>)
                                                    }
                                                </div>
                                                <div className="menu-wrapper">
                                                    <div className="menu-header">
                                                        <h4>{menu?.card?.info?.name}</h4>
                                                        <p style={{marginTop:"6px"}}>
                                                           Rs. {menu?.card?.info?.price/100}
                                                        </p>
                                                        <p className="menu-discp">
                                                            {menu?.card?.info?.description}
                                                        </p>
                                                    </div>
                                                    <div className="menu-image">
                                                        <img className="image" src={img_url+menu?.card?.info?.imageId} alt="Menu Image"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ) : (<span></span>)
                    ))
                   }
                </div>
            </div>
        </div>
    )
}