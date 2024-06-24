import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getListPets = (state: StateSchema) => state?.pets.result;