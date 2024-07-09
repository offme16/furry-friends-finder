import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getNewsData = (state: StateSchema) => state?.news;