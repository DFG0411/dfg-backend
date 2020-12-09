import { Connection } from 'typeorm';
import { PoOpenFjsum } from 'src/app/entities/PoOpenFjsum.entity';

export const PoOpenFjsumProviders = [
  {
    provide: 'PoOpenFjsumToken',
    useFactory: (connection: Connection) => connection.getRepository(PoOpenFjsum),
    inject: ['APPCONNECTION'],
  },
];
