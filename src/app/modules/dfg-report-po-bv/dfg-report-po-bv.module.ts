import { Module } from '@nestjs/common';
import { DfgReportPoBvController } from './dfg-report-po-bv.controller';
import { DfgReportPoBvService } from './dfg-report-po-bv.service';

@Module({
  controllers: [DfgReportPoBvController],
  providers: [DfgReportPoBvService]
})
export class DfgReportPoBvModule {}
