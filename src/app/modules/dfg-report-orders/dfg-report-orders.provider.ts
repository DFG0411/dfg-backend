import { Connection } from 'typeorm';
import { DfgReportOrders } from 'src/app/entities/dfg_report_orders.entity';

export const DfgReportOrdersProviders = [
  {
    provide: 'DfgReportOrdersRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportOrders),
    inject: ['APPCONNECTION'],
  },
];
