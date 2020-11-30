import { Connection } from 'typeorm';
import { DfgReportChuKuWk } from 'src/app/entities/dfg_report_chukuwk.entity';

export const DfgReportChuKuWkProviders = [
  {
    provide: 'DfgReportChuKuWkRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportChuKuWk),
    inject: ['APPCONNECTION'],
  },
];
