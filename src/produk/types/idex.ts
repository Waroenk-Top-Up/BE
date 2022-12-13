import { Exclude } from "class-transformer";

export interface Produk {
    id: number;
    produk: string;
}

export class SerializeProduk {
    id: number;
    produk: string

    constructor(partial: Partial<SerializeProduk>) {
        Object.assign(this, partial)
    }
}