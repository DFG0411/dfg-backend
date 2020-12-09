import { Connection } from 'typeorm';
import { PoPay24m } from 'src/app/entities/PoPay24m.entity';

export const PoPay24mProviders = [
  {
    provide: 'PoPay24mToken',
    useFactory: (connection: Connection) => connection.getRepository(PoPay24m),
    inject: ['APPCONNECTION'],
  },
];
