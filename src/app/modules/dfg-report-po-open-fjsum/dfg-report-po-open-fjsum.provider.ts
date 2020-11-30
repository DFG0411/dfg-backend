import { Connection } from 'typeorm';
import { DfgReportPoOpenFjsum } from 'src/app/entities/dfg_report_po_open_fjsum.entity';

export const DfgReportPoOpenFjsumProviders = [
  {
    provide: 'DfgReportPoOpenFjsumRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoOpenFjsum),
    inject: ['APPCONNECTION'],
  },
];
