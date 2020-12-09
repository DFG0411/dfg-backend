import { Connection } from 'typeorm';
import { PoPay } from 'src/app/entities/PoPay.entity';

export const PoPayProviders = [
  {
    provide: 'PoPayToken',
    useFactory: (connection: Connection) => connection.getRepository(PoPay),
    inject: ['APPCONNECTION'],
  },
];
