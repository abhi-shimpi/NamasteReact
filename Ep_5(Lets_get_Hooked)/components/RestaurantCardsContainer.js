import CardContainer from "./CardContainer";

export const RestaurantCardsContainer = ({respData}) => {
	return (
		<div className="restaurant-cards-container">
			{
				respData.length ? 
				(
					respData.map((restaurant) => (
						<CardContainer key={restaurant.info.resId} resData={restaurant.info}/>
					))
				)
				: (
					<h4>No data available</h4>
				)
			}
		</div>
	);
};
