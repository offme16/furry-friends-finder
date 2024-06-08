// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { $api } from 'shared/api/api';
// import { AxiosError } from 'axios';

// interface Params {
//     field?: string
//     offset?: number
//     limit?: number
// }
// interface IdsProps {
//     action: string;
//     params: Params;
// }
// interface KnownError {
//     message: string;
//     description: string;
//     code: number | undefined;
// }

// export const FieldService = createAsyncThunk(
//     'get_fields',
//     async (data: IdsProps, thunkAPI) => {
//         const state = thunkAPI.getState();
//         try {
//             const response = await $api.post('', data);

//             if (!response.data) {
//                 throw new Error();
//             }

//             return response.data;
//         } catch (e) {
//             const error: AxiosError<KnownError> = e as any;
//             console.log(error.message);
//             return thunkAPI.rejectWithValue('Произошла ошибка');
//         }
//     },
// );