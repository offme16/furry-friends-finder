import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

interface OffsetProps {
    page?: number;
    limit?: number;
}
interface FilterProps {
    city?: string;
    genderPet?: string;
    breedPet?: string;
    colorPet?: string;
    agePet?: string;
}
interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const getPets = createAsyncThunk(
    'get_pets',
    async (data: OffsetProps, thunkAPI) => {
        try {
            const response = await $api.get(`https://6667efe7f53957909ff5d53d.mockapi.io/pets?limit=${data.limit}&page=${data.page}`);
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