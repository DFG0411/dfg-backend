import { Module } from '@nestjs/common';
import { DfgReportPo24mController } from './dfg-report-po-24m.controller';
import { DfgReportPo24mService } from './dfg-report-po-24m.service';

@Module({
  controllers: [DfgReportPo24mController],
  providers: [DfgReportPo24mService]
})
export class DfgReportPo24mModule {}
