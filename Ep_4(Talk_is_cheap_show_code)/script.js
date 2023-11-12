import React from "react";
import ReactDOM from "react-dom/client";
import logo_img from "./images/food_logo.png";
import user_img from "./images/user.webp";
import search_img from "./images/search.png";
import cart_img from "./images/cart.png";
import response from "./response";
/* 
1. Header
  -Logo
  -NavItems
2.Body
  -RestaurantContainer
    -Search
    -Card
3.Footer
  -Address
  -Links
  -Contact Us

*/
const respData = response.sections.SECTION_SEARCH_RESULT;
const LogoComponent = () => (
  <div className="logo">
    <div className="img-height-width">
   	 <img src={logo_img} width="100%" height="100%" />
    </div>
    <h3>Namste Food</h3>
  </div>
);

const NavItemsComponent = () => (
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
    </ul>
  </div>
);

const HeaderComponent = () => (
  <div className="header">
    <LogoComponent />
    <NavItemsComponent />
  </div>
);

const SearchBarComponent = () => (
  <div className="search-bar">
    <input placeholder="Search here"></input>
    <div className="search-img">
      <img src={search_img} width="100%" height="100%" />
    </div>
  </div>
);

const CardContainer = (props) => {
  const { resData } = props;
  const {resId, name, image, rating, cuisine, locality } = resData;
  return (
    <div className="card pointer">
      <div className="img-wrapper">
        <img src={image.url} width="100%" height="100%" />
      </div>
      <h2>{name}</h2>
      <div className="cusines">
        {cuisine.map((item) => (
          <p key={item.name}>{item.name + ","}</p>
        ))}
      </div>
      <p className="ellipsis">
        {locality.name}
      </p>
      <p>{rating.aggregate_rating}</p>
    </div>
  );
};

const RestaurantCardsContainer = () => (
  <div className="restaurant-cards-container">
    {respData.map((restaurant) => (
      <CardContainer key={restaurant.info.resId} resData={restaurant.info} />
    ))}
  </div>
);

const RestaurantContainer = () => (
  <div className="restaurant-container">
    <SearchBarComponent />
    <RestaurantCardsContainer />
  </div>
);

const App = () => (
  <div className="homepage">
    <HeaderComponent />
    <RestaurantContainer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
