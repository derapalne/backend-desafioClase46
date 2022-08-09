import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { ProductoSchema } from './schemas/producto.schema';

@Module({
  imports: [
    ProductosModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'productos',
    }),
    MongooseModule.forFeature([{ name: 'Producto', schema: ProductoSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
