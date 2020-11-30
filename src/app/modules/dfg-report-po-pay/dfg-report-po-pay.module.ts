import { Module } from '@nestjs/common';
import { DfgReportPoPayController } from './dfg-report-po-pay.controller';
import { DfgReportPoPayService } from './dfg-report-po-pay.service';

@Module({
  controllers: [DfgReportPoPayController],
  providers: [DfgReportPoPayService]
})
export class DfgReportPoPayModule {}
