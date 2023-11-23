import React from 'react';
import non_veg_img from "../assets/images/non_veg_img.png";
import veg_img from "../assets/images/veg_img.png";
import { img_url } from "../utils/constants";

function MenuItems(props) {
    const { menuItem } = props;
    console.log(menuItem);
    return (
        <div className='menu-items-animation'>
            {
                menuItem?.map((menu) => (
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
                                <p style={{ marginTop: "6px" }}>
                                    Rs. {menu?.card?.info?.price / 100}
                                </p>
                                <p className="menu-discp">
                                    {menu?.card?.info?.description}
                                </p>
                            </div>
                            <div className="menu-image">
                                <img className="image" src={img_url + menu?.card?.info?.imageId} alt="Menu Image"></img>
                                <button className='add-menu-btn pointer'><span>Add</span><span>+</span></button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MenuItems