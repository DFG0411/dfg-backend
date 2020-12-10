import { Connection } from 'typeorm';
import { SoReceive } from 'src/app/entities/SoReceive.entity';

export const SoReceiveProviders = [
  {
    provide: 'SoReceiveToken',
    useFactory: (connection: Connection) => connection.getRepository(SoReceive),
    inject: ['APPCONNECTION'],
  },
];
