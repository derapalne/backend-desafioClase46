import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from 'src/dto/create-cat.dto';
import { Producto } from '../interfaces/producto.interface';

@Injectable()
export class ProductosService {
    private readonly prods: Producto[] = [];

    create(producto: CreateProductoDto) {
        let newId = 0;
        if(this.prods.length > 0) newId = this.prods[this.prods.length-1].id + 1;
        const prodId = {
            id: newId,
            title: producto.title,
            price: producto.price,
            description: producto.description
        }
        this.prods.push(prodId);
    }

    findById(id: number): Producto {
        return this.prods.filter((p) => p.id == id)[0];
    }

    findAll(): Producto[] {
        return this.prods;
    }

    updateById(id: number, producto: CreateProductoDto): Producto {
        const indexToUpdate = this.prods.findIndex((p) => p.id == id);
        this.prods.splice(indexToUpdate, 1)
        const newProd = {
            id: id,
            title: producto.title,
            price: producto.price,
            description: producto.description
        }
        this.prods.push(newProd);
        this.prods.sort((a, b) => a.id - b.id);
        console.log(this.prods);
        return newProd;
    }

    deleteById(id: number): Producto {
        const indexToDelete = this.prods.findIndex((p) => p.id == id);
        const deletedProd = this.prods[indexToDelete]
        this.prods.splice(indexToDelete, 1)
        return deletedProd;
    }

    deleteAll(): number {
        const oldLength = this.prods.length;
        this.prods.splice(0, this.prods.length);
        return oldLength;
    }


}
