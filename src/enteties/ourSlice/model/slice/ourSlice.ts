// import { createSlice } from '@reduxjs/toolkit';
// import { ourSlicedSchema } from '../type/ourSlicedSchema';
// import { ourThunk } from '../service/FieldService';

// const initialState: ourSlicedSchema = {
//     result: undefined,
//     error: undefined,
//     isLoading: false,
//     field: '',

// };

// export const FieldSlice = createSlice({
//     name: 'ids',
//     initialState,
//     reducers: {
//         setField: (state, action) => {
//             state.field = action.payload;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(FieldService.pending, (state) => {
//                 state.error = undefined;
//                 state.isLoading = true;
//             })
//             .addCase(FieldService.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.result = action.payload.result;
//             })
//             .addCase(FieldService.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
//             });
//     },
// });

// export const { actions: FieldActions } = FieldSlice;
// export const { reducer: FieldReducer } = FieldSlice;