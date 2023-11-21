import logo_img from '../assets/images/food_logo.png'
import useOnlineStatus from '../utils/useOnlineStatus';

export const LogoComponent = () => {
  const onlineStatus  = useOnlineStatus();

  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8">
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