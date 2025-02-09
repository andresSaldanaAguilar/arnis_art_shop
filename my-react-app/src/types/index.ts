export interface AppProps {
    title: string;
    description?: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export type FetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed';