import logo_img from '../assets/images/food_logo.png'
import useOnlineStatus from '../utils/useOnlineStatus';

export const LogoComponent = () => {
  const onlineStatus  = useOnlineStatus();

  return (
    <div className="logo">
      <div className="img-height-width">
          <img src={logo_img} width="100%" height="100%" />
      </div>
      <h3>Namste Food</h3>
      {
              onlineStatus ? (
                  <span>You are online</span>
              ) : (<span>You are offline</span>)
      }
    </div>
  )
}