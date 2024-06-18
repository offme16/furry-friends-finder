export interface NewsFeedSchema {
    result?: News[];
    isLoading: boolean;
    error?: string;
}

export interface News {
    id: number;
    title: string;

}