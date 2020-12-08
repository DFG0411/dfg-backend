import { Connection } from 'typeorm';
import { DfgReportPo_24m } from 'src/app/entities/dfg_report_po_24m.entity';

export const DfgReportPo_24mProviders = [
  {
    provide: 'DfgReportPo_24m',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPo_24m),
    inject: ['APPCONNECTION'],
  },
];
