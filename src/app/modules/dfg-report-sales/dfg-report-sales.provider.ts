import { Connection } from 'typeorm';
import { DfgReportSales } from 'src/app/entities/dfg_report_sales.entity';

export const DfgReportSalesProviders = [
  {
    provide: 'DfgReportSalesRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportSales),
    inject: ['APPCONNECTION'],
  },
];
