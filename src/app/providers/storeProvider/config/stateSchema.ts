import { PetsRegisteredSchema } from "enteties/PetsRegistered";
import { VolunteersRegisteredSchema } from "enteties/VolunteersRegistered/model/type/type";


export interface StateSchema {
    pets: PetsRegisteredSchema,
    volunteers: VolunteersRegisteredSchema,
}

export type StateSchemaKey = keyof StateSchema;