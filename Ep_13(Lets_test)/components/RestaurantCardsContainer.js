import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import { Shimmer } from "./Shimmer";
import { cardContainerWithDiscount } from "./CardContainer";

export const RestaurantCardsContainer = ({respData,keyData}) => {
	// console.log("Hye ",respData)
	// console.log("key ",keyData)
	// console.log(respData)
	const CardWithDiscount = cardContainerWithDiscount(CardContainer);
	// console.log("respData",respData)
	return (
		<div className="restaurant-cards-container">
			{
				respData?.length ? 
				(
					respData.map((restaurant) => (
						<Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
							{
								restaurant?.info?.aggregatedDiscountInfoV3?.header  ? 
								<CardWithDiscount resData={restaurant.info}/> :
								<CardContainer resData={restaurant.info}/>
							}
						</Link>
					))
				) 
				: (
					keyData=="loadData" ? (
						<Shimmer>Shimmer</Shimmer>
					) : (
						<h4>No data available</h4>
					)
				)
			}
		</div>
	);
};
