import { fireEvent, render, screen } from "@testing-library/react"
import { LogoComponent } from "../LogoComponent"
import appStore from "../../utils/appStore";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import "@testing-library/jest-dom"
import { NavItemsComponent } from "../NavItemsComponent";

it("Should render image in Logo component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <LogoComponent/>
            </Provider>
        </BrowserRouter>
    )

    const img  = screen.getByRole("img");
    // const img  = screen.getByAltText(/cart-image/);
    // const img  = screen.get;

    // Assertion
    expect(img).toBeInTheDocument();

})


it("Should render NavItems component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <NavItemsComponent/>
            </Provider>
        </BrowserRouter>
    )

    const img  = screen.getByAltText(/cart-image/);
    // const img  = screen.get;

    // Assertion
    expect(img).toBeInTheDocument();

})


it("Should render button of NavItems component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                {/* <LogoComponent/> */}
                <NavItemsComponent/>
            </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginBtn)

    const logouBtn = screen.getByRole("button",{name:"Logout"});
   
    // Assertion
    expect(logouBtn).toBeInTheDocument();

})
