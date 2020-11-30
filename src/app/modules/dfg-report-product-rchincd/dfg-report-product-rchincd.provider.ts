import { Connection } from 'typeorm';
import { DfgReportProductRcHincd } from 'src/app/entities/dfg_report_product_rchincd.entity';

export const DfgReportProductRcHincdProviders = [
  {
    provide: 'DfgReportProductRcHincdRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportProductRcHincd),
    inject: ['APPCONNECTION'],
  },
];
