import { ProdukService } from './../../services/produk/produk.service';
import { ClassSerializerInterceptor, Controller, Get, Inject, Param, UseInterceptors, ParseIntPipe, HttpException, HttpStatus, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { SerializeProduk } from 'src/produk/types/idex';
import { CreateProdukDto } from 'src/produk/dto/createProduk.dto';

@Controller('produks')
export class ProdukController {
    constructor(
        @Inject('PRODUK_SERVICE') private readonly ProdukService: ProdukService,
    ) {}
    
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getProduk() {
        return this.ProdukService.getProduk();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/id/:id')
    getByProduk(@Param('id', ParseIntPipe) id: number) {
        const produk = this.ProdukService.getProdukById(id);
        if (produk) return new SerializeProduk(produk);
        else {
            throw new HttpException('Produk Not Found', HttpStatus.BAD_REQUEST)
        }

    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createProduk(@Body() CreateProdukDto: CreateProdukDto) {
        return this.ProdukService.createProduk(CreateProdukDto)
    }

}
