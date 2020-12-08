import { Module } from '@nestjs/common';
import { DfgReportSaleszmController } from './dfg-report-saleszm.controller';
import { DfgReportSaleszmService } from './dfg-report-saleszm.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportSalesZmProviders } from '../dfg-report-saleszm/dfg-report-saleszm.provider';
@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportSaleszmController],
  providers: [...DfgReportSalesZmProviders,DfgReportSaleszmService]
})
export class DfgReportSaleszmModule {}
