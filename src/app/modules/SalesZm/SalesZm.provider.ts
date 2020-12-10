import { Connection } from 'typeorm';
import { SalesZm } from 'src/app/entities/SalesZm.entity';

export const SalesZmProviders = [
  {
    provide: 'SalesZmToken',
    useFactory: (connection: Connection) => connection.getRepository(SalesZm),
    inject: ['APPCONNECTION'],
  },
];
