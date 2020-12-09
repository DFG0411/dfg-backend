import { Connection } from 'typeorm';
import { PoWorkload } from 'src/app/entities/PoWorkload.entity';

export const PoWorkloadProviders = [
  {
    provide: 'PoWorkloadToken',
    useFactory: (connection: Connection) => connection.getRepository(PoWorkload),
    inject: ['APPCONNECTION'],
  },
];
