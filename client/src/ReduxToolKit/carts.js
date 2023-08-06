import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            // Add the product to the cart state
            state.push(action.payload);
        },

        removeFromCart: (state, action) => {
            // Remove the product from the cart state
            const productId = action.payload;
            return state.filter((product) => product._id !== productId);
        },
        clearCart: (state) => {
            // Clear the cart state
            return [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const cartSlices = createSlice({
//     name: 'cart',
//     initialState: [],
//     reducers: {
//         addToCart: (state, action) => {
//             // Add the product to the cart state
//             state.push(action.payload);
//         },

//         removeFromCart: (state, action) => {
//             // Remove the product from the cart state
//             const productId = action.payload;
//             return state.filter((product) => product._id !== productId);
//         },
//         clearCart: (state) => {
//             // Clear the cart state
//             return [];
//         },
//     },
// });

// export const { addToCarts, removeFromCart, clearCart } = cartSlices.actions;
// export default cartSlices.reducer;