import { Connection } from 'typeorm';
import { DfgReportProductRcHincdAll } from 'src/app/entities/dfg_report_product_rchincdall.entity';

export const DfgReportProductRcHincdAllProviders = [
  {
    provide: 'DfgReportProductRcHincdAllRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportProductRcHincdAll),
    inject: ['APPCONNECTION'],
  },
];
