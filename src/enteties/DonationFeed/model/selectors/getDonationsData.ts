import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getDonationsData = (state: StateSchema) => state?.donations.result;