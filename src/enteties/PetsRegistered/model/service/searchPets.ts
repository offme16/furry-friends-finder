import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';
import { PetsRegisteredActions } from '../slice/PetsRegisteredSlice';

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

export const searchPets = createAsyncThunk(
    'search_pets',
    async (filters: FilterProps, thunkAPI) => {
        const { city, genderPet, breedPet, colorPet, agePet } = filters;
        try {
            const response = await $api.get(`https://6667efe7f53957909ff5d53d.mockapi.io/pets`,
                {
                    params: {
                        city,
                        genderPet,
                        breedPet,
                        colorPet,
                        agePet
                    }
                }
            );
            if (!response.data) {
                throw new Error();
            }
            return  thunkAPI.dispatch(PetsRegisteredActions.setData(response.data));
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            return thunkAPI.rejectWithValue(error);
        }
    },
);