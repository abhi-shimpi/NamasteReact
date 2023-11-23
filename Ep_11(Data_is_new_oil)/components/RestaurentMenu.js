import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { json, useParams } from "react-router-dom";
import delivery_icon from "../assets/images/delivery_icon.png";
import rating_img from "../assets/images/rating_img.png";
import offer_img from "../assets/images/offer_img.png";
import MenuShimmer from "./MenuShimmer";
import MenuCategories from "./MenuCategories";

export const RestaurentMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [restDetails, setRestDetails] = useState({});
    const [offerDetails, setOfferDetails] = useState([]);
    const [childDataHeader, setChildDataHeader] = useState([]);
    const [showIndex, setShowIndex] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])
    console.log("RestaurentMenu")
    const fetchData = async () => {
        const responseData = await fetch(MENU_API + resId);
        const jsonData = await responseData.json();
        setRestDetails(JSON.parse(JSON.stringify(jsonData?.data?.cards[0]?.card?.card?.info)));
        setOfferDetails(JSON.parse(JSON.stringify(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers)));

        let menuItemsCategoryWise = JSON.parse(JSON.stringify(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards));
        menuItemsCategoryWise = menuItemsCategoryWise.filter((item) => {
            // console.log(item.card.card["@type"])
            if (item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") return item;
        })
        setMenuItems(menuItemsCategoryWise);
    }

    const { resId } = useParams();

    if (menuItems.length === 0) {
        return <MenuShimmer />
    }

    onMenuHeaderClick = (childData) =>{
        console.log("parent")
        setChildDataHeader(childData)
    }

    return (
        <div className="rest-menu">
            <div className="rest-menu-details">
                <div className="rest-details-container">
                    <div className="rest-details">
                        <div className="rest-name">
                            {/* {console.log("In Component")} */}
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
                        offerDetails?.map((offer) => (
                            <div key={offer?.info?.offerIds[0]} className="offer-card">
                                {
                                    offer.info?.offerTag ? (
                                        <div style={{ color: offer.info.offerTagColor }} className="deal">
                                            {offer.info.offerTag}
                                        </div>
                                    ) : (
                                        <span></span>
                                    )
                                }
                                <div className="offer-details">
                                    <div className="offer-header">
                                        <div style={{ width: '18px', height: '18px' }}>
                                            <img src={offer_img} alt="offer image" style={{ width: '100%', height: '100%' }}></img>
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
                        menuItems.map((menuItem,index) => (
                            <MenuCategories 
                                key={menuItem?.card?.card?.title}
                                onMenuHeaderClick1={onMenuHeaderClick}
                                menuItem={menuItem}
                                setShowIndexes={()=> {
                                    console.log(index)
                                    if(showIndex === index) setShowIndex(null)
                                    else setShowIndex(index)}}
                                showMenuItems={index===showIndex ? true : false}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}