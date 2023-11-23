import { useContext } from 'react'
import { img_url } from "../utils/constants";
import UserContext from "../utils/UserContext"

const CardContainer = (props) => {
  const { resData } = props;
  const { resId, name, cloudinaryImageId, avgRating, cuisines, locality } = resData;
  // console.log(resData)
  const data = useContext(UserContext);
  console.log(data)

  return (
    <div className="card pointer">
      <div className="img-wrapper">
        <img src={img_url + cloudinaryImageId} width="100%" height="100%" />
      </div>
      <h2>{name}</h2>
      <div className="cusines">
        {cuisines.map((res) => (
          <p key={res}>{res},</p>
        ))}
      </div>
      <p className="ellipsis">{locality}</p>
      <p>{avgRating}</p>
      <p>{data.loggedInUser}</p>
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