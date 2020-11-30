import { Module } from '@nestjs/common';
import { DfgReportPoBv24mController } from './dfg-report-po-bv-24m.controller';
import { DfgReportPoBv24mService } from './dfg-report-po-bv-24m.service';

@Module({
  controllers: [DfgReportPoBv24mController],
  providers: [DfgReportPoBv24mService]
})
export class DfgReportPoBv24mModule {}
