import { fireEvent, render, screen } from "@testing-library/react"
import mock_data from "../mocks/restaurentListData.json";
import { RestaurantContainer } from "../RestaurantContainer";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(mock_data)
        }
    })
})

beforeAll(()=>{
    // console.log("Before All")

})

beforeEach(()=>{
    // console.log("Before each")

})

afterEach(()=>{
    // console.log("After each")

})

afterAll(() => {
    // Code to run after all test suites
    // This could include cleanup operations or finalizing resources
    // console.log("AFter ALl")
  });


describe("Reastaurent container test cases", () => {
    // it("Should render body component", async() => {

    //     // returns a Promise
    //     await act(()=>{
    //         render(
    //             <BrowserRouter>
    //                 <RestaurantContainer />
    //             </BrowserRouter>
    //         )
    //    })

    //    const searchBtn = screen.getByAltText("search-button")

    // //    const card = screen.getByText("ITC Master Chef Creations")

    // //    console.log("searchBtn",searchBtn)

    //    //Assertion
    //    expect(card).toBeInTheDocument();

    // })

    it("Should render searched card after search", async () => {

        // returns a Promise
        await act(() => {
            render(
                <BrowserRouter>
                    <RestaurantContainer />
                </BrowserRouter>
            )
        })

        //Before search 
        const cardBeforeSearch = screen.getAllByTestId("card-container");

        //Assertion
        expect(cardBeforeSearch.length).toBe(20);

        //Search 
        const searchInput = screen.getByTestId("searchedValue");

        //In actual code (e) value is provided by browser but here we need to fake it 
        // {} => this is simulation of onClick= {()=>{}}
        fireEvent.change(searchInput, { target: { value: "Coffee" } })

        //    console.log("search-input",searchInput.value);

        // Getting search btn by test id
        const searchBtn = screen.getByTestId("search-btn");

        // Clicking on btn
        fireEvent.click(searchBtn);

        // Checking number of cards we get after search
        const cardAfterSearch = screen.getAllByTestId("card-container");
        //    console.log(cardAfterSearch)

        expect(cardAfterSearch.length).toBe(2)
    })

    it("Should return 19 restaurent cards after clicking on top rated res", async () => {
        await act(() => {
            render(
                <BrowserRouter>
                    <RestaurantContainer />
                </BrowserRouter>
            )
        })

        const cardBeforeSearch = screen.getAllByTestId("card-container");

        //Assertion
        expect(cardBeforeSearch.length).toBe(20);

        const filterBtn = screen.getByRole("button", { name: "Top Rated Restaurents" });

        fireEvent.click(filterBtn);

        const cardAfterSearch = screen.getAllByTestId("card-container");

        //Assertion
        expect(cardAfterSearch.length).toBe(19);
    })
})