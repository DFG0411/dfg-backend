import { Connection } from 'typeorm';
import { PoOpen } from 'src/app/entities/PoOpen.entity';

export const PoOpenProviders = [
  {
    provide: 'PoOpenToken',
    useFactory: (connection: Connection) => connection.getRepository(PoOpen),
    inject: ['APPCONNECTION'],
  },
];
