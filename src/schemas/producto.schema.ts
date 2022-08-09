import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

@Schema()
export class Producto {
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    description: string;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);