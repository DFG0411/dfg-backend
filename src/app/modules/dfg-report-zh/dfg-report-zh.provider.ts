import { Connection } from 'typeorm';
import { DfgReportZh } from 'src/app/entities/dfg_report_zh.entity';

export const DfgReportZhProviders = [
  {
    provide: 'DfgReportZhRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportZh),
    inject: ['APPCONNECTION'],
  },
];
