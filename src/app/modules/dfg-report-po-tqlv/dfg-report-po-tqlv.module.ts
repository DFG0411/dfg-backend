import { Module } from '@nestjs/common';
import { DfgReportPoTqlvController } from './dfg-report-po-tqlv.controller';
import { DfgReportPoTqlvService } from './dfg-report-po-tqlv.service';

@Module({
  controllers: [DfgReportPoTqlvController],
  providers: [DfgReportPoTqlvService]
})
export class DfgReportPoTqlvModule {}
