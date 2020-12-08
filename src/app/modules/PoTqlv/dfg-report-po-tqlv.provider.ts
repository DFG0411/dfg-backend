import { Connection } from 'typeorm';
import { DfgReportPoTqlv } from 'src/app/entities/dfg_report_po_tqlv.entity';

export const DfgReportPoTqlvProviders = [
  {
    provide: 'DfgReportPoTqlvRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoTqlv),
    inject: ['APPCONNECTION'],
  },
];
