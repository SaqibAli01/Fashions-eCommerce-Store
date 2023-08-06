import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace the API_URL with your backend server URL
const API_URL = 'http://localhost:8000';

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async ({ items, shippingDetails, totalAmount }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/api/v1/createOrder`, {
                items,
                shippingDetails,
                totalAmount,
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        loading: false,
        error: null,
        order: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.order = action.payload;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default orderSlice.reducer;
