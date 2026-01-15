import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice({
    name: 'stocks',
    initialState: { items: [], loading: false, error: null },
    reducers: {
        fetchStockRequest(state) { state.loading = true; },
        fetchStockSuccess(state, action) {
            state.loading = false;
            state.items = action.payload;
        },
        fetchStockFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchStockRequest, fetchStockSuccess, fetchStockFailure } = stockSlice.actions;

export default stockSlice.reducer;