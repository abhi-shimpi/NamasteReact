export default CardContainer = (props) => {
  const { resData } = props;
  const { resId, name, image, rating, cuisine, locality } = resData;
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
      <p className="ellipsis">{locality.name}</p>
      <p>{rating.aggregate_rating}</p>
    </div>
  );
};
