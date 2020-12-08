import { Connection } from 'typeorm';
import { DfgReportPo } from 'src/app/entities/dfg_report_po.entity';

export const DfgReportPoProviders = [
  {
    provide: 'DfgReportPoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPo),
    inject: ['APPCONNECTION'],
  },
];
