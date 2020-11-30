import { Connection } from 'typeorm';
import { DfgReportPoPay_24m } from 'src/app/entities/dfg_report_po_pay_24m.entity';

export const DfgReportPoPay_24mProviders = [
  {
    provide: 'DfgReportPoPay_24mRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoPay_24m),
    inject: ['APPCONNECTION'],
  },
];
