import logo_img from '../assets/images/food_logo.png'

export const LogoComponent = () => (
    <div className="logo">
      <div className="img-height-width">
          <img src={logo_img} width="100%" height="100%" />
      </div>
      <h3>Namste Food</h3>
    </div>
  );