import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postReducer from './postSlice';
import cartReducers from './cartSlice';
import cartReducer from './carts';

const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        carts: cartReducers,
        cart: cartReducer,

    },
});

export default store;
