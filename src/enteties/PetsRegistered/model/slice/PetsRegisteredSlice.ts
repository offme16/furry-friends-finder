import { createSlice } from '@reduxjs/toolkit';
import { PetsRegisteredSchema } from '../type/type';
import { getPets } from '../service/getPets';

const initialState: PetsRegisteredSchema = {
    result: [],
    error: '',
    isLoading: false,
    page: 1,
    limit: 6,
};

export const PetsRegisteredSlice = createSlice({
    name: 'Pets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPets.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getPets.fulfilled, (state, action) => {
                state.isLoading = false;
                state.result = action.payload;
            })
            .addCase(getPets.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: PetsRegisteredActions } = PetsRegisteredSlice;
export const { reducer: PetsRegisteredReducer } = PetsRegisteredSlice;