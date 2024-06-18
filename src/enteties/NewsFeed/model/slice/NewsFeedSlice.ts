import { createSlice } from '@reduxjs/toolkit';
import { NewsFeedSchema } from '../type/type';
import { getNews } from '../service/getNews';

const initialState:NewsFeedSchema = {
    result: [],
    error: '',
    isLoading: false,
};

export const NewsFeedSlice = createSlice({
    name: 'Pets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNews.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getNews.fulfilled, (state, action) => {
                state.isLoading = false;
                state.result = action.payload;
            })
            .addCase(getNews.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: NewsFeedSliceActions } = NewsFeedSlice;
export const { reducer: NewsFeedSliceReducer } = NewsFeedSlice;