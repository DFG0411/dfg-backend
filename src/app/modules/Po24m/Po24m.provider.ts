import { Connection } from 'typeorm';
import { Po24m } from 'src/app/entities/Po24m.entity';

export const Po24mProviders = [
  {
    provide: 'Po24mToken',
    useFactory: (connection: Connection) => connection.getRepository(Po24m),
    inject: ['APPCONNECTION'],
  },
];
