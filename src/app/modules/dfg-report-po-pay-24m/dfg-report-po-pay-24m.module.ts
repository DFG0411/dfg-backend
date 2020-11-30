import { Module } from '@nestjs/common';
import { DfgReportPoPay24mController } from './dfg-report-po-pay-24m.controller';
import { DfgReportPoPay24mService } from './dfg-report-po-pay-24m.service';

@Module({
  controllers: [DfgReportPoPay24mController],
  providers: [DfgReportPoPay24mService]
})
export class DfgReportPoPay24mModule {}
