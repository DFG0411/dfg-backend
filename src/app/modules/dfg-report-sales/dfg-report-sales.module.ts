import { Module } from '@nestjs/common';
import { DfgReportSalesController } from './dfg-report-sales.controller';
import { DfgReportSalesService } from './dfg-report-sales.service';

@Module({
  controllers: [DfgReportSalesController],
  providers: [DfgReportSalesService]
})
export class DfgReportSalesModule {}
