import { CreateProdukDto } from 'src/produk/dto/createProduk.dto';
import { Produk, SerializeProduk } from './../../types/idex';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produk as ProdukEntity } from "src/typeorm"

@Injectable()
export class ProdukService {

    constructor(@InjectRepository(ProdukEntity) private readonly produkRepository:Repository<ProdukEntity>) {

    }
        private produks: Produk[] = [];

        getProduk() {
         return this.produks.map((produk) => new SerializeProduk(produk));
        }

        getProdukById(id: number) {
            return this.produks.find((produk) => produk.id === id);
        }

        async createProduk(CreateProdukDto: CreateProdukDto ) {
            const newProduk = this.produkRepository.create(CreateProdukDto);
            return await this.produkRepository.save(newProduk);
        }
}
