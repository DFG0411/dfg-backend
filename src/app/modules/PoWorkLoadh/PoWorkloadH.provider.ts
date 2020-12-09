import { Connection } from 'typeorm';
import { PoWorkloadH } from 'src/app/entities/PoWorkloadH.entity';

export const PoWorkloadHProviders = [
  {
    provide: 'PoWorkloadHToken',
    useFactory: (connection: Connection) => connection.getRepository(PoWorkloadH),
    inject: ['APPCONNECTION'],
  },
];
