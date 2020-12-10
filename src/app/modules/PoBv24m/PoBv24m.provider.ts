import { Connection } from 'typeorm';
import { PoBv24m } from 'src/app/entities/PoBv24m.entity';

export const PoBv24mProviders = [
  {
    provide: 'PoBv24mToken',
    useFactory: (connection: Connection) => connection.getRepository(PoBv24m),
    inject: ['APPCONNECTION'],
  },
];
