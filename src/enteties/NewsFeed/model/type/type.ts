export interface NewsFeedSchema {
    result?: News[];
    isLoading: boolean;
    error?: string;
    page: number;
    limit: number;
}

export interface News {
    id: number;
    fact: string;
    utl: string
}