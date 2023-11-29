import { useContext, useEffect, useState } from 'react'
// import user_img from '../assets/images/user.webp'
import { Link } from 'react-router-dom';
import UserContextDummy from '../utils/UserContextDummy';
import { useSelector } from 'react-redux';

export const NavItemsComponent = () => {
    // let authenticityBtn = "Login"
    const [authenticityBtn, setAuthenticityBtn] = useState("Login");

    // Subscribing to store to read data from store using selector
    const cartItems = useSelector((store) => {
        console.log(store.cart.items);
        return store.cart.items;
    })

    // console.log("NavItemsComponent")
    useEffect(() => {
        // console.log("UseEfect in NavItemsComponent")
    }, [authenticityBtn])

    const data = useContext(UserContextDummy);
    const { loggedOutUser } = data;

    return (
        <div className="nav-items font-600">
            <ul>
                <li className='pointer'>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className='pointer'>
                    <Link to={'/about'}>About Us</Link>
                </li>
                <li className='pointer'>
                    <Link to={'/contact'}>Contact Us</Link>
                </li>
                <li className='pointer'>
                    <Link to={'/grocery'}>Grocery</Link>
                </li>
                <li className="img-height-width pointer">
                    <Link to={'/cart'}>
                        <img alt='cart-image' src={require('../assets/images/cart.png')} width="100%" height="100%" />
                        {Object.keys(cartItems).length ? <p data-testid="cart-items" className='cart-items-count'>{cartItems.totalItems}</p> : <span></span>}
                    </Link>
                </li>
                {/* <li className="img-height-width pointer">
                    <img src={user_img} width="100%" height="100%" />
                </li> */}
                <li>
                    {loggedOutUser}
                </li>
                <li>
                    <button className='login-btn pointer' onClick={() => {
                        authenticityBtn === "Login" ? setAuthenticityBtn("Logout") : setAuthenticityBtn("Login")
                    }}>
                        {authenticityBtn}
                    </button>
                </li>
            </ul>
        </div>
    )
}

