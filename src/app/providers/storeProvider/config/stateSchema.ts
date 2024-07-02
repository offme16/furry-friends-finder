import { NewsFeedSchema } from "enteties/NewsFeed";
import { DonationsFeedSchema } from "enteties/DonationFeed";
import { PetsRegisteredSchema } from "enteties/PetsRegistered";
import { VolunteersRegisteredSchema } from "enteties/VolunteersRegistered/model/type/type";


export interface StateSchema {
    pets: PetsRegisteredSchema,
    volunteers: VolunteersRegisteredSchema,
    news: NewsFeedSchema,
    donations: DonationsFeedSchema
}

export type StateSchemaKey = keyof StateSchema;