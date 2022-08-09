import { Document } from "mongoose";

export interface Producto extends Document {
    readonly id: number;
    readonly title: string;
    readonly price: number;
    readonly description: string;
}
