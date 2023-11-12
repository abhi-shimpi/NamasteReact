import {img_url} from "../utils/constants"

export default CardContainer = (props) => {
  console.log(props)
  const { resData } = props;
  const { resId, name, cloudinaryImageId, avgRating, cuisines, locality } = resData;
  return (
    <div className="card pointer">
      <div className="img-wrapper">
        <img src={img_url + cloudinaryImageId} width="100%" height="100%" />
      </div>
      <h2>{name}</h2>
      <div className="cusines">
        {cuisines.map((res)=>(
          <p>{res},</p>
        ))}
      </div>
      <p className="ellipsis">{locality}</p>
      <p>{avgRating}</p>
    </div>
  );
};
