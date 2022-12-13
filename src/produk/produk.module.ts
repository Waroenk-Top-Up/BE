import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produk } from 'src/typeorm';
import { ProdukController } from './controllers/produk/produk.controller';
import { ProdukService } from './services/produk/produk.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Produk])
  ],
  controllers: [ProdukController],
  providers: [{
    provide: 'PRODUK_SERVICE',
    useClass: ProdukService,
  }]
})
export class ProdukModule {}
