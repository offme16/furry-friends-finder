export interface VolunteersRegisteredSchema {
    result?: Volunteers[];
    isLoading: boolean;
    error?: string;
}

export interface Volunteers {
    id: number;
    name: string;
    phone: string;
    city: string;
}