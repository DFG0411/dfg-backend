import { Connection } from 'typeorm';
import { DfgReportPoOpen } from 'src/app/entities/dfg_report_po_open.entity';

export const DfgReportPoOpenProviders = [
  {
    provide: 'DfgReportPoOpenRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoOpen),
    inject: ['APPCONNECTION'],
  },
];
