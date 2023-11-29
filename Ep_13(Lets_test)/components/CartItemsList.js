// import veg_img from "../assets/images/veg_img.png";
// import non_veg_img from "../assets/images/non_veg_img.png";

function CartItemsList({itemData}) {
    console.log(itemData); 

  return (
    <div data-testid="itemList" className="itemslist">
        <div className="is-veg-image">
            {
                itemData.isVeg==="VEG" ? 
                <img className="image" src={require("../assets/images/veg_img.png")} alt="Veg Image"></img>:
                <img className="image" src={require("../assets/images/non_veg_img.png")} alt="Non Veg Image"></img>
            }
        </div>
        <div className="item-name font-500">
            {itemData.name}
        </div>
        <div className="item-count">
            <span className="light-grey pointer">-</span>
            <span data-testid="quantity" className="light-green pointer">{Math.round(itemData.quantity)}</span>
            <span className="light-green pointer">+</span>
        </div>
        <div className="item-price light-grey ">
            ₹ {Math.round((itemData.price/100) * itemData.quantity)}
        </div>
    </div>
  )
}

export default CartItemsList