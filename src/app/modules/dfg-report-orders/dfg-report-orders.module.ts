import { Module } from '@nestjs/common';
import { DfgReportOrdersController } from './dfg-report-orders.controller';
import { DfgReportOrdersService } from './dfg-report-orders.service';

@Module({
  controllers: [DfgReportOrdersController],
  providers: [DfgReportOrdersService]
})
export class DfgReportOrdersModule {}
