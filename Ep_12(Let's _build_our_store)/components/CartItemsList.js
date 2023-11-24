import veg_img from "../assets/images/veg_img.png";
import non_veg_img from "../assets/images/non_veg_img.png";

function CartItemsList({itemData}) {
    console.log(itemData); 

  return (
    <div className="itemslist">
        <div className="is-veg-image">
            {
                itemData.isVeg==="VEG" ? 
                <img className="image" src={veg_img} alt="Veg Image"></img>:
                <img className="image" src={non_veg_img} alt="Non Veg Image"></img>
            }
        </div>
        <div className="item-name font-500">
            {itemData.name}
        </div>
        <div className="item-count">
            <span className="light-grey pointer">-</span>
            <span className="light-green pointer">{itemData.quantity}</span>
            <span className="light-green pointer">+</span>
        </div>
        <div className="item-price light-grey ">
            ₹ {Math.round((itemData.price/100) * itemData.quantity)}
        </div>
    </div>
  )
}

export default CartItemsList