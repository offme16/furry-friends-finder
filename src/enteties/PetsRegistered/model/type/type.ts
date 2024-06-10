export interface PetsRegisteredSchema {
    result?: Pets[];
    isLoading: boolean;
    error?: string;
}

export interface Pets {
    id: number;
    name: string;
}