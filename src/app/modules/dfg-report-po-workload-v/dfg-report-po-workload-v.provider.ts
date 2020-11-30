import { Connection } from 'typeorm';
import { DfgReportPoWorkloadV } from 'src/app/entities/dfg_report_po_workload_v.entity';

export const DfgReportPoWorkloadVProviders = [
  {
    provide: 'DfgReportPoWorkloadVRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoWorkloadV),
    inject: ['APPCONNECTION'],
  },
];
