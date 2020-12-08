import { Connection } from 'typeorm';
import { DfgReportTyuzan } from 'src/app/entities/dfg_report_tyuzan.entity';

export const DfgReportTyuzanProviders = [
  {
    provide: 'DfgReportTyuzanRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(DfgReportTyuzan),
    inject: ['APPCONNECTION'],
  },
];
