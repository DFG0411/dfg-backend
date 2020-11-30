import { Connection } from 'typeorm';
import { DfgReportProductRc } from 'src/app/entities/dfg_report_product_rc.entity';

export const DfgReportProductRcProviders = [
  {
    provide: 'DfgReportProductRcRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportProductRc),
    inject: ['APPCONNECTION'],
  },
];
