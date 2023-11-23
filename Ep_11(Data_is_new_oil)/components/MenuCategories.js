import React ,{useState} from 'react';
import MenuItems from "./MenuItems";
import down_arrow from "../assets/images/down_arrow.png";
import up_arrow from "../assets/images/up_arrow.png";


function MenuCategories({menuItem,showMenuItems,onMenuHeaderClick1,setShowIndexes}) {
    // const [showMenuItems, setShowMenuItems] = useState(false);
    console.log("MenuCategories")
    return (
        <div className="accordian">
            <div className="accordian-title pointer" onClick={() => {
                console.log("clicked");
                // onMenuHeaderClick1(menuItem?.card?.card?.title)
                setShowIndexes()
            }}>
                <h3>{menuItem?.card?.card?.title}({menuItem?.card?.card?.itemCards.length})</h3>
                <div style={{ width: '25px', height: '25px' }}>
                   {
                    showMenuItems ? 
                    <img style={{ width: '100%', height: '100%' }} src={up_arrow} alt=""></img>:
                    <img style={{ width: '100%', height: '100%' }} src={down_arrow} alt=""></img>
                   }
                   
                </div>
            </div>
            <div>
                {showMenuItems && <MenuItems menuItem={menuItem?.card?.card?.itemCards} />}
            </div>
        </div>
    )
}

export default MenuCategories