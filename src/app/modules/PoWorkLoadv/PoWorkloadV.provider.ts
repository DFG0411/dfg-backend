import { Connection } from 'typeorm';
import { PoWorkloadV } from 'src/app/entities/PoWorkloadV.entity';

export const PoWorkloadVProviders = [
  {
    provide: 'PoWorkloadVToken',
    useFactory: (connection: Connection) => connection.getRepository(PoWorkloadV),
    inject: ['APPCONNECTION'],
  },
];
