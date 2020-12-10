import { Connection } from 'typeorm';
import { ProductRcHincdAll } from 'src/app/entities/ProductRcHincdAll.entity';

export const ProductRcHincdAllProviders = [
  {
    provide: 'ProductRcHincdAllToken',
    useFactory: (connection: Connection) => connection.getRepository(ProductRcHincdAll),
    inject: ['APPCONNECTION'],
  },
];
