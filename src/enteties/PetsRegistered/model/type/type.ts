export interface PetsRegisteredSchema {
    result?: Pets[];
    refs?: Refs[];
    isLoading: boolean;
    error?: string;
    page: number;
    limit: number;
}

export interface Pets {
    id: string;
    ownerID: number;
    city: string;
    petName: string;
    genderPet: string;
    agePet: string;
    breedPet: string;
    colorPet: string;
    features: Array<string>;
    description: string;
    picturePet: Array<string>;
}

export interface Refs {
    breeds?: string[];
    colors?: string[];
    gender?: string[];
}