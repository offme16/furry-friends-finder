import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';
import { PetsRegisteredActions } from '../slice/PetsRegisteredSlice';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const getPet = createAsyncThunk(
    'get_pet',
    async (id : number, thunkAPI) => {
        try {
            const response = await $api.get(`https://6667efe7f53957909ff5d53d.mockapi.io/pets?id=${id}`);
            if (!response.data) {
                throw new Error();
            }
            
            return  thunkAPI.dispatch(PetsRegisteredActions.setPet(response.data));
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            return thunkAPI.rejectWithValue(error);
        }
    },
);