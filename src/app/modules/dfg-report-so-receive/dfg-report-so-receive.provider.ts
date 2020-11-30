import { Connection } from 'typeorm';
import { DfgReportSoReceive } from 'src/app/entities/dfg_report_so_receive.entity';

export const DfgReportSoReceiveProviders = [
  {
    provide: 'DfgReportSoReceiveRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportSoReceive),
    inject: ['APPCONNECTION'],
  },
];
