import { NewsFeedSchema } from "enteties/NewsFeed";
import { PetsRegisteredSchema } from "enteties/PetsRegistered";
import { VolunteersRegisteredSchema } from "enteties/VolunteersRegistered/model/type/type";


export interface StateSchema {
    pets: PetsRegisteredSchema,
    volunteers: VolunteersRegisteredSchema,
    news: NewsFeedSchema,
}

export type StateSchemaKey = keyof StateSchema;