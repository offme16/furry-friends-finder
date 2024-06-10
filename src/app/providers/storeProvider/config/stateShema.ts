import { PetsRegisteredSchema } from "enteties/PetsRegistered";


export interface StateSchema {
    pets: PetsRegisteredSchema,
}

export type StateSchemaKey = keyof StateSchema;