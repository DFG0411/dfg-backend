import { Module } from '@nestjs/common';
import { DfgReportPoController } from './dfg-report-po.controller';
import { DfgReportPoService } from './dfg-report-po.service';

@Module({
  controllers: [DfgReportPoController],
  providers: [DfgReportPoService]
})
export class DfgReportPoModule {}
