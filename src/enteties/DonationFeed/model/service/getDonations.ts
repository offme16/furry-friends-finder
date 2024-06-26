import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';
import { off } from 'process';

interface offsetProps {
    page?: number
    limit?: number
}
interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const getDonations = createAsyncThunk(
    'get_donations',
    async (offset: offsetProps, thunkAPI) => {
        const {page, limit} = offset;
        try {
            const response = await $api.get(`https://667befab3c30891b865aa7cf.mockapi.io/bars/donations?page=${page}&limit=${limit}`);
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