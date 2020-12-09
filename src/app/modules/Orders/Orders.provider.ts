import { Connection } from 'typeorm';
import { Orders } from 'src/app/entities/Orders.entity';

export const OrdersProviders = [
  {
    provide: 'OrdersToken',
    useFactory: (connection: Connection) => connection.getRepository(Orders),
    inject: ['APPCONNECTION'],
  },
];
