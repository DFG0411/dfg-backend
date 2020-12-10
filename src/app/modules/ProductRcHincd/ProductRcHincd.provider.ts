import { Connection } from 'typeorm';
import { ProductRcHincd } from 'src/app/entities/ProductRcHincd.entity';

export const ProductRcHincdProviders = [
  {
    provide: 'ProductRcHincdToken',
    useFactory: (connection: Connection) => connection.getRepository(ProductRcHincd),
    inject: ['APPCONNECTION'],
  },
];
