import { createContext } from "react";

const CartDetailsContext = createContext({
        resName : "",
        resImageId: "",
        resLocation : ""
})

export default CartDetailsContext;