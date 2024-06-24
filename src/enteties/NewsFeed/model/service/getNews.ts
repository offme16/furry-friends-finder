import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

interface offsetProps {
    page?: number
    limit?: number
}
interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const getNews = createAsyncThunk(
    'get_pets',
    async (offset: offsetProps, thunkAPI) => {
        try {
            const response = await $api.get(`https://666dd1c27a3738f7cacd64da.mockapi.io/news`);
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