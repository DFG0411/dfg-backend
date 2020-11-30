import { Connection } from 'typeorm';
import { DfgReportUninvoiced } from 'src/app/entities/dfg_report_uninvoiced.entity';

export const DfgReportUninvoicedProviders = [
  {
    provide: 'DfgReportUninvoicedRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportUninvoiced),
    inject: ['APPCONNECTION'],
  },
];
