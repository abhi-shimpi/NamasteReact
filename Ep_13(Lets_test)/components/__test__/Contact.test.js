import { render,screen } from "@testing-library/react"
import { Contact } from "../Contact"
import "@testing-library/jest-dom";

function compileAndroidCode() {
    // throw new Error('you are using the wrong JDK!');
  }

describe('Contact component test cases', () => {
    test("It should render Contact component",()=> {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    test("It should render submit text in Contact component",()=> {
        render(<Contact/>);
    
        // Returns a single element
        const heading = screen.getByText("submit");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    
    test("It should return input in Contact component",()=> {
        render(<Contact/>);
    
        // Returns a Multiple elements // Querying
        const input = screen.getAllByRole("textbox");
    
        // console.log(input)
    
        // Assertion
        expect(input.length).toBeGreaterThan(1)
    })
    
    // test("It should return error in Contact component",()=> {
    //     expect(() => compileAndroidCode()).toThrow();
    // })
});

