import { Module } from '@nestjs/common';
import { DfgReportZhController } from './dfg-report-zh.controller';
import { DfgReportZhService } from './dfg-report-zh.service';

@Module({
  controllers: [DfgReportZhController],
  providers: [DfgReportZhService]
})
export class DfgReportZhModule {}
