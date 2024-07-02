import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getBusketData = (state: StateSchema) => state?.donations.busket;