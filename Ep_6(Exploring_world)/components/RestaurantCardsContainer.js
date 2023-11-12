import CardContainer from "./CardContainer";
import { Shimmer } from "./Shimmer";

export const RestaurantCardsContainer = ({respData,keyData}) => {
	// console.log("Hye ",respData)
	// console.log("key ",keyData)
	return (
		<div className="restaurant-cards-container">
			{
				respData?.length ? 
				(
					respData.map((restaurant) => (
						<CardContainer key={restaurant.info.id} resData={restaurant.info}/>
					))
				)
				: (
					keyData=="loadData" ? (
						<Shimmer/>
					) : (
						<h4>No data available</h4>
					)
				)
			}
		</div>
	);
};
