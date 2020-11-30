import { Module } from '@nestjs/common';
import { DfgReportUninvoicedController } from './dfg-report-uninvoiced.controller';
import { DfgReportUninvoicedService } from './dfg-report-uninvoiced.service';

@Module({
  controllers: [DfgReportUninvoicedController],
  providers: [DfgReportUninvoicedService]
})
export class DfgReportUninvoicedModule {}
