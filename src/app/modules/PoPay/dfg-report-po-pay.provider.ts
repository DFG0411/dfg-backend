import { Connection } from 'typeorm';
import { DfgReportPoPay } from 'src/app/entities/dfg_report_po_pay.entity';

export const DfgReportPoPayProviders = [
  {
    provide: 'DfgReportPoPayRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoPay),
    inject: ['APPCONNECTION'],
  },
];
