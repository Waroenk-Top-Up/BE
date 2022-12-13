import { Exclude } from "class-transformer";


export interface User {
    id: number;
    username: string;
    password: string;
}

export class SerializeUser {
    id: number;
    username: string
    
    @Exclude()
    password: string
    
    constructor(partial: Partial<SerializeUser>) {
        Object.assign(this, partial)
    }
}

export interface Register {
    id: number;
    email: string;
    password: string;
}

export interface SerializeRegister {
    id: number;
    email: string;
    password: string;
}