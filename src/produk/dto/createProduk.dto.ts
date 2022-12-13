import { IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateProdukDto {
    @IsNotEmpty()
    produk: string;
}