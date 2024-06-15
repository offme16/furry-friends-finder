import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

interface IdsProps {
    offset?: number
    limit?: number
}
interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const getVolunteers = createAsyncThunk(
    'get_volunteers',
    async (data: IdsProps, thunkAPI) => {
        try {
            const response = await $api.post('', data);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);