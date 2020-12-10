import { Connection } from 'typeorm';
import { PoTqlvZ } from 'src/app/entities/PoTqlvZ.entity';

export const PoTqlvZProviders = [
  {
    provide: 'PoTqlvZToken',
    useFactory: (connection: Connection) => connection.getRepository(PoTqlvZ),
    inject: ['APPCONNECTION'],
  },
];
