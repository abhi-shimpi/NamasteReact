import { useContext } from 'react'
import { img_url } from "../utils/constants";
import UserContext from "../utils/UserContext"

const CardContainer = (props) => {
  const { resData } = props;
  // console.log(resData)
  const { resId, name, cloudinaryImageId, avgRating, cuisines, areaName } = resData;
  // console.log(resData)
  const data = useContext(UserContext);
  // console.log(data)

  return (
    <div data-testid="card-container" className="card pointer">
      <div className="img-wrapper">
        <img src={img_url + cloudinaryImageId} width="100%" height="100%" />
      </div>
      <div className='card-header pad-0-8'>
        <h2 >{name}</h2>
      </div>
      <div className="cusines pad-0-8">
        {cuisines.join(",")}
      </div>
      <p className="ellipsis pad-0-8">{areaName}</p>
      <div className='display-flex pad-0-8'>
        <div className='star-rating'>
          {
            avgRating > 4 ?
              (<img className='image' src={require("../assets/images/green_star.png")}></img>) :
              (<img className='image' src={require("../assets/images/yellow_star.png")}></img>)
          }
        </div>
        <p>{avgRating}</p>
      </div>
    </div>
  );
};

// HOF - Input => CardContainer = CardContainerWithDiscount
export const cardContainerWithDiscount = (CardContainer) => {
  return (props) => {
    // console.log(props)
    return (
      <div className="card-with-discount">
        {/* {console.log("CardContainerWithDiscount", props)} */}
        <div className="triangle-topright"></div>
        <label className="discount-label" >{props?.resData?.aggregatedDiscountInfoV3?.header}</label>
        <CardContainer {...props} />
      </div>
    )
  }
}

export default CardContainer;