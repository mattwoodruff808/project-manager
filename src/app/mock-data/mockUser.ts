export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
}

export const users: User[] = [
    {
        id: 1,
        name: 'Matt',
        email: 'pooch@cakes.com',
        password: 'pooch',
    }
];
