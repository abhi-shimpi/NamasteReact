import { Link } from "react-router-dom";
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
						<Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
							<CardContainer resData={restaurant.info}/>
						</Link>
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
