const menuArray = [1,2,3,4,5,6,7,8,9,10]

function MenuShimmer() {
  return (
    <div className="shimmer-menu">
        <div className="shimmer-menu-items">
        </div>
        {
            menuArray.map((item)=>(
                <div key={item} className="shimmer-accordian">
                </div>      
            ))
        }
    </div>
  )
}

export default MenuShimmer