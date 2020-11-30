import { Connection } from 'typeorm';
import { DfgReportPoTqlvZ } from 'src/app/entities/dfg_report_po_tqlvz.entity';

export const DfgReportPoTqlvZProviders = [
  {
    provide: 'DfgReportPoTqlvZRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoTqlvZ),
    inject: ['APPCONNECTION'],
  },
];
