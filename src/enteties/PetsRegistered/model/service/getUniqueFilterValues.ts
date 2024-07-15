import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';
import { PetsRegisteredActions } from '../slice/PetsRegisteredSlice';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const getUniqueFilterValues = createAsyncThunk(
    'get_param',
    async (_, thunkAPI) => {
        try {
            const response = await $api.get(`https://6601a8069d7276a75551e685.mockapi.io/api/v1/tasks`,
            );
            if (!response.data) {
                throw new Error();
            }
            
            return thunkAPI.dispatch(PetsRegisteredActions.setRefs(response.data));
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            return thunkAPI.rejectWithValue(error);
        }
    },
);