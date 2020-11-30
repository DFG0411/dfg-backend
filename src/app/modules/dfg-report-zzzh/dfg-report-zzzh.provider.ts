import { Connection } from 'typeorm';
import { DfgReportZzzh } from 'src/app/entities/dfg_report_zzzh.entity';

export const DfgReportZzzhProviders = [
  {
    provide: 'DfgReportZzzhRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportZzzh),
    inject: ['APPCONNECTION'],
  },
];
