import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProductoDto{

    @IsString()
    @MaxLength(25)
    @IsNotEmpty()
    readonly title: string;
    
    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
    
    @IsString()
    @IsNotEmpty()
    readonly description: string;
    
}