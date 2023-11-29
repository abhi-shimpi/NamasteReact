import { img_url } from "../utils/constants"

function Carousel({ carauselData }) {
  console.log(carauselData)
  const carouselItems = carauselData?.imageGridCards?.info;

  const onLeftArrowClick = () => {
    const itemsList = document.querySelector(".carusel-items");
    const scrollAmount = itemsList.clientWidth * -1;

    itemsList.scrollBy({left: scrollAmount , behavior:"smooth"})
  }

  const onRightArrowClick = () => {
    const itemsList = document.querySelector(".carusel-items");
    const leftArrow = document.getElementsByClassName("btn");
    const scrollAmount = itemsList.clientWidth * 1;

    leftArrow[0].style.opacity = 1;
    itemsList.scrollBy({left: scrollAmount , behavior:"smooth"})
  }

  return (
    <div className="carousel-container">
      <div className="header-wrapper">
        <h3>{carauselData?.header?.title ? carauselData?.header?.title : "Best offers for you"}</h3>
        <div className="buttons-wrapper">
          <div className="btn">
            <img className="image pointer" src={require("../assets/images/left_arrow.png")} onClick={() => {
              onLeftArrowClick()
            }}></img>
          </div>
          <div className="btn">
            <img className="image pointer" src={require("../assets/images/right_arrow.png")} onClick={() => {
              onRightArrowClick()
            }}></img>
          </div>
        </div>
      </div>
      <div className="carusel-items">
        {
          carouselItems?.map((item) => (
            item?.imageId &&
            <div className="carousel-image">
              <img className="image" src={img_url + item.imageId}></img>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Carousel