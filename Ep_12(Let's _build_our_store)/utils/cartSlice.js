import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {}
    },
    reducers: {
        // action : {payload : "pizza"} 
        // addItem: (state, action) => {
        //     // console.log(action.payload)
        //     const cardInfo = action.payload.card.info;
        //     let newState = {...state.items};

        //     if (current(state.items)?.totalItems && current(state.items[cardInfo.id])) {
        //         newState.totalItems = current(state.items).totalItems + 1;
        //         const id = current(state.items[cardInfo.id]);
        //         newState[id].quantity = newState[id].quantity + 1;
        //         newState = { ...newState };
        //     } else {
        //         newState[cardInfo.id] = {
        //             quantity: 1,
        //             name: cardInfo.name,
        //             veg: cardInfo.isVeg,
        //             price: cardInfo.price,
        //             category: cardInfo.category
        //         }
        //         if(current(state.items)?.totalItems) newState.totalItems = current(state.items).totalItems + 1;
        //         else newState.totalItems = 1;
                
        //         newState = {...newState};
        //     }

        //     // In older version of Redux (Vanilla redux ) 
        //     // throwed a error if we MUTATED tha state 
        //     // So we need to do like
        //     // const newState = [...state]
        //     // newState.push(action.payload)
        //     // return newState;

        //     // But in RTK we have to MUTATE state
        //     // state.items.push(action.payload);
        //     console.log("state", current(state.items));
        //     // console.log("new state", newState);
        //     return {...state,newState};
        // },
        addItem: (state, action) => {
            console.log("action.payload",action.payload)
            const cardInfo = action.payload[0].card.info;
            const resInfo = action.payload[1];
            const newState = { ...state }; // Shallow copy of the state
        
            if (state.items && Object.keys(state.items).length && state.items[cardInfo.id]) {
                // If the item already exists, update its quantity
                const itemId = cardInfo.id;
                newState.items[itemId].quantity += 1;
                newState.items.totalItems += 1;
            } else {
                if(Object.keys(state.items).length) newState.items.totalItems += 1;
                else {
                    newState.items.totalItems = 1;
                    newState.items.resName = resInfo.resName,
                    newState.items.resImageId = resInfo.resImageId,
                    newState.items.resLocation = resInfo.resLocation
                    newState.items.resId = resInfo.resId,
                    newState.items.resFees = resInfo.resFees,
                    newState.items.resFeesMessage = resInfo.resFeesMessage
                }
                // If the item doesn't exist, add a new entry for it
                newState.items[cardInfo.id] = {
                    quantity: 1,
                    name: cardInfo.name,
                    isVeg: cardInfo.itemAttribute?.vegClassifier,
                    price: cardInfo.price,
                    category: cardInfo.category,
                };
            }
            // return newState;
        },        
        removeItem: (state) => {
            state.items.pop();
        },
        // Originale state = ["pizza"]
        clearCart: (state) => {
            // Eigther you can MUTATE original state 
            // state.items.length = 0;

            // Or you can return
            return { items: [] }

            // console.log(current(state))
            // console.log(state)
            // state = []   // Its creating local state variable and updating it . Its not changing Original state variable 
            // console.log(state)
            // why not state.item = [] ?
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;