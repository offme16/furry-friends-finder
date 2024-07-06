export interface DonationsFeedSchema {
    result?: Donations[];
    isLoading: boolean;
    error?: string;
    page: number;
    busket?: Donations[];
    limit: number;
}

export interface Donations {
    id: number;
    name: string;
    cost: number;
    count: number;
    img: string;
    description: string
}