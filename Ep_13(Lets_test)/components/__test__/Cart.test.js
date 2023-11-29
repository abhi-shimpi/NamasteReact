import appStore from "../../utils/appStore";
import { render, screen, act, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { RestaurentMenu } from "../RestaurentMenu";
import MOCK_DATA from "../mocks/restaurentMenuData.json";
import "@testing-library/jest-dom"
import { NavItemsComponent } from "../NavItemsComponent";
// import HeaderComponent from "../HeaderComponent"
import UserContextDummy from "../../utils/UserContextDummy";
import { BrowserRouter } from "react-router-dom";
import { Cart } from "../Cart";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

const mockContextValue = {
    loggedOutUser: 'Akshay',
};

describe('Should render cart component', () => {
  

    it("Should render Legendary Andhra Meals(3) category RestaurentMenu component", async () => {
        await act(() => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <UserContextDummy.Provider value={mockContextValue}>
                            <NavItemsComponent />
                        </UserContextDummy.Provider>
                        <RestaurentMenu />
                    </Provider>
                </BrowserRouter>

            )
        })

        const menu = screen.getByText("Legendary Andhra Meals(3)");
        console.log(menu);
        expect(menu).toBeInTheDocument()
    })

    it("Should check wheather menu is being expanded or not", async () => {
        await act(() => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <UserContextDummy.Provider value={mockContextValue}>
                            <NavItemsComponent />
                        </UserContextDummy.Provider>
                        <RestaurentMenu />
                    </Provider>
                </BrowserRouter>

            )
        })
        const menu = screen.getByText("Legendary Andhra Meals(3)");
        fireEvent.click(menu);
        const addBtns = screen.getAllByRole("button", { name: "Add +" });
        console.log(addBtns.length);

        expect(addBtns.length).toBe(3)
    })

    it("Should check count of items added in cart is get updated in NavComponent", async () => {
        await act(() => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <UserContextDummy.Provider value={mockContextValue}>
                            <NavItemsComponent />
                        </UserContextDummy.Provider>
                        <RestaurentMenu />
                    </Provider>
                </BrowserRouter>

            )
        })

        const menu = screen.getByText("Legendary Andhra Meals(3)");

        fireEvent.click(menu);

        const addBtns = screen.getAllByRole("button", { name: "Add +" });
    
        fireEvent.click(addBtns[0]);

        // p tag in nav component
        const itemsCount = screen.getByTestId("cart-items");
        console.log(itemsCount.textContent)

        expect(itemsCount.textContent).toBe("1")

        fireEvent.click(addBtns[0]);

        expect(itemsCount.textContent).toBe("2")
    })

    it("Should check count of items added in cart  in Cart Component", async () => {
        await act(() => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <UserContextDummy.Provider value={mockContextValue}>
                            <NavItemsComponent />
                        </UserContextDummy.Provider>
                        <RestaurentMenu />
                        <Cart/>
                    </Provider>
                </BrowserRouter>

            )
        })

        const menu = screen.getByText("Legendary Andhra Meals(3)");

        fireEvent.click(menu);

        const addBtns = screen.getAllByRole("button", { name: "Add +" });
    
        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[0]);

        const itemsList = screen.getAllByTestId("quantity");
        console.log(itemsList.length)

        expect(itemsList[0].textContent).toBe("4")
    })
});
