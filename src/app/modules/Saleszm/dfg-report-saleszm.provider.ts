import { Connection } from 'typeorm';
import { DfgReportSalesZm } from 'src/app/entities/dfg_report_saleszm.entity';

export const DfgReportSalesZmProviders = [
  {
    provide: 'DfgReportSalesZmRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportSalesZm),
    inject: ['APPCONNECTION'],
  },
];
