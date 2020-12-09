import { Connection } from 'typeorm';
import { ChukuWk } from 'src/app/entities/ChukuWk.entity';

export const ChukuWkProviders = [
  {
    provide: 'ChukuWkToken',
    useFactory: (connection: Connection) => connection.getRepository(ChukuWk),
    inject: ['APPCONNECTION'],
  },
];
