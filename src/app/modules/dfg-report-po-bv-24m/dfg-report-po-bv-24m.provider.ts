import { Connection } from 'typeorm';
import { DfgReportPoBv_24m } from 'src/app/entities/dfg_report_po_bv_24m.entity';

export const DfgReportPoBv_24mProviders = [
  {
    provide: 'DfgReportPoBv_24mRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoBv_24m),
    inject: ['APPCONNECTION'],
  },
];
