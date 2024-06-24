export interface PetsRegisteredSchema {
    result?: Pets[];
    isLoading: boolean;
    error?: string;
    page: number;
    limit: number;
}

export interface Pets {
    id: number;
    name: string;
}