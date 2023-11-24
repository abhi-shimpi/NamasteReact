import { useDispatch, useSelector } from "react-redux"
import MenuItems from "./MenuItems"
import { clearCart } from "../utils/cartSlice";
import { img_url } from "../utils/constants";
import CartItemsList from "./CartItemsList";

export const Cart = () => {

    // This is very efficient way to subscribe to store 
    // Here we are selecting only a specific portion of store which item of cart
    // So cartItems will get updated only when changes that selected part(which is item of cart) will happen 
    const cartItems = useSelector((store) => store.cart.items)
    const cartItemsKeysArray = Object.keys(cartItems);
    cartItemsKeysArray.splice(cartItemsKeysArray.length - 7, 7)
    let totalPrice = 0;

    cartItemsKeysArray.map((key) => {
        totalPrice = totalPrice + (cartItems[key]?.price / 100) * cartItems[key]?.quantity
    })

    // While below is very in-effiecient way of subscribing to store 
    // Because whenever there is small change will happen in store , below store 
    // will get updated which affects performence of app
    // const store  = useSelector((store) => store)
    // const cartItems = store.cart.item
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    console.log("cartItems", cartItems)
    return (
        <>
            {
                cartItemsKeysArray.length ?
                (
                    <div className="cart-container">
                        <div className="delivery-meta-details">

                        </div>
                        <div className="cart-items-details">
                            <div className="restaurent-details">
                                <div className="restaurent-image">
                                    <img className="image" src={img_url + cartItems.resImageId} alt="restaurent-image" />
                                </div>
                                <div className="restaurent-name">
                                    <h3>{cartItems.resName}</h3>
                                    <p>{cartItems.resLocation}</p>
                                </div>
                            </div>
                            <div className="itemlist-and-bill-container">
                                {
                                    cartItemsKeysArray.map((key) => (
                                        <CartItemsList key={key} itemData={cartItems[key]} />
                                    ))
                                }
                                <div className="billing-details">
                                    <h4>Bill Details</h4>
                                    <div className="bill-item">
                                        <span>Item total</span>
                                        <span>{totalPrice}</span>
                                    </div>
                                    <div className="bill-item">
                                        <span>{cartItems.resFeesMessage}</span>
                                        <span>{cartItems.resFees / 100}</span>
                                    </div>
                                    <div className="bill-item">
                                        <span>Platform fee</span>
                                        <span>₹ 3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="to-pay">
                                <h4>To Pay</h4>
                                <h4>₹ {Math.round(totalPrice + (cartItems.resFees / 100) + 3)}</h4>
                            </div>
                        </div>
                    </div>
                ) :
                (<h3>Your cart is empty please add some Items!</h3>)
            }
        </>
    )
}