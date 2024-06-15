import { createSlice } from '@reduxjs/toolkit';
import { VolunteersRegisteredSchema } from '../type/type';
import { getVolunteers } from '../service/getVolunteers';

const initialState: VolunteersRegisteredSchema = {
    result: [],
    error: '',
    isLoading: false,
};

export const VolunteersRegisteredSlice = createSlice({
    name: 'Volunteers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getVolunteers.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getVolunteers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.result = action.payload;
            })
            .addCase(getVolunteers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: VolunteersRegisteredActions } = VolunteersRegisteredSlice;
export const { reducer: VolunteersRegisteredReducer } = VolunteersRegisteredSlice;