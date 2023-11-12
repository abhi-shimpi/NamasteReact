import { useEffect, useState } from 'react'
import cart_img from '../assets/images/cart.png'
import user_img from '../assets/images/user.webp'

export const NavItemsComponent = () => {
    // let authenticityBtn = "Login"
    const [authenticityBtn,setAuthenticityBtn] = useState("Login");
    // console.log("NavItemsComponent")
    useEffect(()=>{
        // console.log("UseEfect in NavItemsComponent")
    },[authenticityBtn])

    return (
        <div className="nav-items font-600">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li className="img-height-width pointer">
                    <img src={cart_img} width="100%" height="100%" />
                </li>
                <li className="img-height-width pointer">
                    <img src={user_img} width="100%" height="100%" />
                </li>
                <li>
                    <button className='login-btn pointer' onClick={() => {
                        authenticityBtn === "Login"? setAuthenticityBtn("Logout") : setAuthenticityBtn("Login")
                    }}>
                        {authenticityBtn}
                    </button>
                </li>
            </ul>
        </div>
    )
}

