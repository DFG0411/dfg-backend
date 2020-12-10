import { Connection } from 'typeorm';
import { RptPo } from 'src/app/entities/RptPo.entity';

export const RptPoProviders = [
  {
    provide: 'RptPoToken',
    useFactory: (connection: Connection) => connection.getRepository(RptPo),
    inject: ['APPCONNECTION'],
  },
];
