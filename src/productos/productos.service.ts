import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductoDto } from 'src/dto/create-producto.dto';
import { UpdateProductoDto } from 'src/dto/update-producto.dto';
import { Producto as ProductoSchema } from 'src/schemas/producto.schema';
import { Producto } from '../interfaces/producto.interface';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(ProductoSchema.name) private productoModel: Model<Producto>, 
  ) {}
  private readonly prods: Producto[] = [];

  async create(producto: CreateProductoDto): Promise<Producto> {
    const newProducto = await new this.productoModel(producto);
    return newProducto.save();
  }

  async findById(id: number): Promise<Producto> {
    return await this.productoModel.findById(id).exec();
  }

  async findAll(): Promise<Producto[]> {
    return await this.productoModel.find();
  }

  async updateById(id: number, producto: UpdateProductoDto): Promise<Producto> {
    const existingProducto = await this.productoModel.findByIdAndUpdate(
      id,
      producto,
      { new: true },
    );
    return existingProducto;
  }

  async deleteById(id: number): Promise<Producto> {
    return await this.productoModel.findByIdAndDelete(id);
  }

  async deleteAll(): Promise<number> {
    return await (
      await this.productoModel.deleteMany({})
    ).deletedCount;
  }
}
