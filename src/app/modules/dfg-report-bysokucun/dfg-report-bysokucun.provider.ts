import { Connection } from 'typeorm';
import { DfgReportBySoKuCun } from 'src/app/entities/dfg_report_bysokucun.entity';

export const DfgReportBySoKuCunProviders = [
  {
    provide: 'DfgReportBySoKuCunRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportBySoKuCun),
    inject: ['APPCONNECTION'],
  },
];
