import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { PetsRegisteredReducer } from 'enteties/PetsRegistered';

import { StateSchema } from './stateShema';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        pets:PetsRegisteredReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch']