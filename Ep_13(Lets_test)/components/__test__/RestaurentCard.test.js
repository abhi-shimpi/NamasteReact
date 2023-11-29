import {  render,screen } from "@testing-library/react"
import appStore from "../../utils/appStore";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import "@testing-library/jest-dom"
import mock_data from "../mocks/restaurentCardData.json";
import {cardContainerWithDiscount} from "../CardContainer";
import CardContainer from "../CardContainer";


it("Should render cardData restaurent component",()=>{
    render(
        <CardContainer resData={mock_data}/>
    )

    const name = screen.getByText("Starbucks Coffee");

    // Assertion
    expect(name).toBeInTheDocument();
}) 

it("Should render card data with promoted label in restaurent component",()=>{
    const CardWithDiscount = cardContainerWithDiscount(CardContainer);
    render(
        <CardWithDiscount resData={mock_data}/>
    )

    const name = screen.getByText("50% OFF");

    // Assertion
    expect(name).toBeInTheDocument();
}) 