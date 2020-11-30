import { Module } from '@nestjs/common';
import { DfgReportBysokucunController } from './dfg-report-bysokucun.controller';

@Module({
  controllers: [DfgReportBysokucunController]
})
export class DfgReportBysokucunModule {}
