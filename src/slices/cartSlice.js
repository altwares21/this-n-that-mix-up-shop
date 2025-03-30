import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload); // Add the new item to the cart
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id); // Remove item by ID
        },
        clearCart: () => {
            return []; // Clear the entire cart
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;