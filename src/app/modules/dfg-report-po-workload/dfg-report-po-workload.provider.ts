import { Connection } from 'typeorm';
import { DfgReportPoWorkload } from 'src/app/entities/dfg_report_po_workload.entity';

export const DfgReportPoWorkloadProviders = [
  {
    provide: 'DfgReportPoWorkloadRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoWorkload),
    inject: ['APPCONNECTION'],
  },
];
