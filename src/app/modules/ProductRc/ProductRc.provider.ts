import { Connection } from 'typeorm';
import { ProductRc } from 'src/app/entities/ProductRc.entity';

export const ProductRcProviders = [
  {
    provide: 'ProductRcToken',
    useFactory: (connection: Connection) => connection.getRepository(ProductRc),
    inject: ['APPCONNECTION'],
  },
];
