import React, { useContext, useState } from 'react';
// import non_veg_img from "../assets/images/non_veg_img.png";
// import veg_img from "../assets/images/veg_img.png";
import { img_url } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import CartDetailsContext from '../utils/CartDetailsContext';

function MenuItems(props) {
    const { menu } = props;
    // console.log(menuItem);
    const dispatch = useDispatch();

    const [itemsAdded , setItemsAdded] = useState(0);
    const [desclaimer , setDesclaimer] = useState(false);

    // Subscribing to store using selector
    const cartData = useSelector((store)=>store.cart.items)

    const resDetailsForCart = useContext(CartDetailsContext);

    const handleAddItem = (menu) => {
        // Dispatch  an action 
        //  {action.payLoad  = "pizza"}
        if(Object.keys(cartData).length) {
            // If cart has items
            if(cartData.resId === resDetailsForCart.resId) {
                // If incoming menu item is of same rest
                setDesclaimer(false);
                const payLoad = [menu,resDetailsForCart]
                dispatch(addItem(payLoad));
                setItemsAdded(itemsAdded + 1);
            } else{
                // If incoming menu item is not of same rest
                setDesclaimer(true);
            }
        } else {
            // If cart has no items
            const payLoad = [menu,resDetailsForCart]
            dispatch(addItem(payLoad));
            setItemsAdded(itemsAdded + 1);
        }
    }
    // console.log(resDetailsForCart)
    return (
        <div className='menu-items-animation'>
            <div className="menu-card">
                <div className="veg-classifier">
                    {
                        menu?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ?
                            (<img className="image" src={require("../assets/images/non_veg_img.png")} alt="Non Veg Image"></img>) :
                            (<img className="image" src={require("../assets/images/veg_img.png")} alt="Veg Image"></img>)
                    }
                </div>
                <div className="menu-wrapper">
                    <div className="menu-header">
                        <h4>{menu?.card?.info?.name}</h4>
                        <p style={{ marginTop: "6px" }}>
                            Rs. {menu?.card?.info?.price / 100}
                        </p>
                        <p className="menu-discp">
                            {menu?.card?.info?.description}
                        </p>
                    </div>
                    { desclaimer && console.log("Items from other are res alredy present. Clear your cart")}

                    <div className="menu-image">
                        {itemsAdded===0 ? <img className="image" src={img_url + menu?.card?.info?.imageId} alt="Menu Image"></img> : <span></span>}
                        <button className={`pointer ${itemsAdded===0 ? "add-menu-btn": "add-menu-updated-btn"}`} onClick={() => handleAddItem(menu)}>
                            {itemsAdded !==0 ? <span>-</span> : <span></span>}
                            {itemsAdded===0 ? <span>Add</span> : <span></span>}
                            {itemsAdded!==0 ? <span >{itemsAdded}</span> : <span></span>}
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItems