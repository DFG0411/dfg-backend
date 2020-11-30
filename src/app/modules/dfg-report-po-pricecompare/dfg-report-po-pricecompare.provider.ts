import { Connection } from 'typeorm';
import { DfgReportPoPricecompare } from 'src/app/entities/dfg_report_po_pricecompare.entity';

export const DfgReportPoPricecompareProviders = [
  {
    provide: 'DfgReportPoPricecompareRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoPricecompare),
    inject: ['APPCONNECTION'],
  },
];
