import { Module } from '@nestjs/common';
import { DfgReportPoTqlvzController } from './dfg-report-po-tqlvz.controller';
import { DfgReportPoTqlvzService } from './dfg-report-po-tqlvz.service';

@Module({
  controllers: [DfgReportPoTqlvzController],
  providers: [DfgReportPoTqlvzService]
})
export class DfgReportPoTqlvzModule {}
