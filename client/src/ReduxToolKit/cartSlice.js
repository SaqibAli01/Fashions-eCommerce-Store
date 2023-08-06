import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async ({ userId, productId, quantity }) => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                token: token,
            };

            console.log('userId, productId, quantity ', userId, productId, quantity)
            const response = await axios.post('http://localhost:8000/api/v1/addToCart', {
                userId,
                productId,
                quantity,

            }, { headers });
            return response.data;
        } catch (error) {
            throw new Error('An error occurred while adding item to cart.');
        }
    }
);

//get data carr
export const getCartData = createAsyncThunk('cart/getCartData', async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/cart`, userId);
        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching cart data.');
    }
});


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: false,
        error: null,
        items: [],
        successMessage: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = '';
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.items) {
                    state.items.push(...action.payload.items);
                }
                state.successMessage = action.payload.message;
                toast.success(action.payload.message);
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action?.payload?.message;
                toast.error(action?.error?.message);
            })

        //get card items
        builder
            .addCase(getCartData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCartData.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                toast.success(action?.payload?.message);

            })
            .addCase(getCartData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error(action?.error?.message);

            });
    },
});

export default cartSlice.reducer;




