import useOnlineStatus from '../utils/useOnlineStatus';

export const LogoComponent = () => {
  const onlineStatus  = useOnlineStatus();

  return (
    <div className="logo">
      <div className="img-height-width">
          <img alt='logo' src={require('../assets/images/food_logo.png')} width="100%" height="100%" />
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