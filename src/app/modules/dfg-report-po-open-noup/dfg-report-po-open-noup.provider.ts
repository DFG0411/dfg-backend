import { Connection } from 'typeorm';
import { DfgReportPoOpenNoup } from 'src/app/entities/dfg_report_po_open_noup.entity';

export const DfgReportPoOpenNoupProviders = [
  {
    provide: 'DfgReportPoOpenNoupRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportPoOpenNoup),
    inject: ['APPCONNECTION'],
  },
];
