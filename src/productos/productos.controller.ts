import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from '../dto/create-cat.dto';
import { Producto } from '../interfaces/producto.interface';

@Controller('prods')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    this.productosService.create(createProductoDto);
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.productosService.findById(Number(id));
  }

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Put(":id")
  async updateById(@Param("id") id: string, @Body() createProductoDto: CreateProductoDto) {
    return this.productosService.updateById(Number(id), createProductoDto);
  }

  @Delete(":id")
  async deleteById(@Param("id") id: string) {
    if(id == "all") {
        return this.productosService.deleteAll();
    } else {
        return this.productosService.deleteById(Number(id));
    }
  }

}
