import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from '../dto/create-producto.dto';
import { Producto } from '../interfaces/producto.interface';
import { UpdateProductoDto } from 'src/dto/update-producto.dto';

@Controller('prods')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    await this.productosService.create(createProductoDto);
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return await this.productosService.findById(Number(id));
  }

  @Get()
  async findAll(): Promise<Producto[]> {
    return await this.productosService.findAll();
  }

  @Put(":id")
  async updateById(@Param("id") id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return await this.productosService.updateById(Number(id), updateProductoDto);
  }

  @Delete(":id")
  async deleteById(@Param("id") id: string) {
    if(id == "all") {
        return await this.productosService.deleteAll();
    } else {
        return await this.productosService.deleteById(Number(id));
    }
  }

}
