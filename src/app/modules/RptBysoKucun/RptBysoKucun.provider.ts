import { Connection } from 'typeorm';
import { RptBysoKucun } from 'src/app/entities/RptBysoKucun.entity';

export const DfgReportBySoKuCunProviders = [
  {
    provide: 'RptBysoKucunToken',
    useFactory: (connection: Connection) => connection.getRepository(RptBysoKucun),
    inject: ['APPCONNECTION'],
  },
];
