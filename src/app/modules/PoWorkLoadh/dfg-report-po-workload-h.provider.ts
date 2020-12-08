import { Connection } from 'typeorm';
import { DfgReportPoWorkloadH } from 'src/app/entities/dfg_report_po_workload_h.entity';

export const DfgReportPoWorkloadHProviders = [
  {
    provide: 'DfgReportPoWorkloadHRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoWorkloadH),
    inject: ['APPCONNECTION'],
  },
];
