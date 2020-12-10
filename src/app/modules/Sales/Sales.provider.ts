import { Connection } from 'typeorm';
import { Sales } from 'src/app/entities/Sales.entity';

export const  SalesProviders = [
  {
    provide: 'SalesToken',
    useFactory: (connection: Connection) => connection.getRepository(Sales),
    inject: ['APPCONNECTION'],
  },
];
