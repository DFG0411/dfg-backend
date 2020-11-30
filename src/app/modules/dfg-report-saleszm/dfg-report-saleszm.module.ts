import { Module } from '@nestjs/common';
import { DfgReportSaleszmController } from './dfg-report-saleszm.controller';
import { DfgReportSaleszmService } from './dfg-report-saleszm.service';

@Module({
  controllers: [DfgReportSaleszmController],
  providers: [DfgReportSaleszmService]
})
export class DfgReportSaleszmModule {}
