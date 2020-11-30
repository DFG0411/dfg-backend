import { Module } from '@nestjs/common';
import { DfgReportZzzhController } from './dfg-report-zzzh.controller';
import { DfgReportZzzhService } from './dfg-report-zzzh.service';

@Module({
  controllers: [DfgReportZzzhController],
  providers: [DfgReportZzzhService]
})
export class DfgReportZzzhModule {}
