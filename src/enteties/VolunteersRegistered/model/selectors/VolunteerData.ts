import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const VolunteerData = (state: StateSchema) => state?.volunteers.result;