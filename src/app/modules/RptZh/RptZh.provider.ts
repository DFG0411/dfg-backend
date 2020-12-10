import { Connection } from 'typeorm';
import { RptZh } from 'src/app/entities/RptZh.entity';

export const RptZhProviders = [
  {
    provide: 'RptZhToken',
    useFactory: (connection: Connection) => connection.getRepository(RptZh),
    inject: ['APPCONNECTION'],
  },
];
