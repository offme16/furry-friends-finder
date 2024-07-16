import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pets, PetsRegisteredSchema, Refs } from '../type/type';
import { getPets } from '../service/getPets';

const initialState: PetsRegisteredSchema = {
    result: [],
    refs: [],
    error: '',
    isLoading: false,
    page: 1,
    limit: 12,
}
export const PetsRegisteredSlice = createSlice({
    name: 'Pets',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setData: (state, action: PayloadAction<Pets[]>) => {
            state.result = action.payload;
        },
        setRefs: (state, action: PayloadAction<Refs[]>) => {
            state.refs = action.payload;
        },
        setPet: (state, action: PayloadAction<Pets[]>) => {
            state.result = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPets.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getPets.fulfilled, (state, action: PayloadAction<Pets[]>) => {
                state.isLoading = false;
                state.result = action.payload;
            })
            .addCase(getPets.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            })
    },
});

export const { actions: PetsRegisteredActions } = PetsRegisteredSlice;
export const { reducer: PetsRegisteredReducer } = PetsRegisteredSlice;