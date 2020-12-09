import { Connection } from 'typeorm';
import { PoTqlv } from 'src/app/entities/PoTqlv.entity';

export const PoTqlvProviders = [
  {
    provide: 'PoTqlvToken',
    useFactory: (connection: Connection) => connection.getRepository(PoTqlv),
    inject: ['APPCONNECTION'],
  },
];
