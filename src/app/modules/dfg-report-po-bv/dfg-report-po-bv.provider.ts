import { Connection } from 'typeorm';

import { DfgReportPoBv } from 'src/app/entities/dfg_report_po_bv.entity';

export const DfgReportPoBvProviders = [
  {
    provide: 'DfgReportPoBvRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoBv),
    inject: ['APPCONNECTION'],
  },
];
