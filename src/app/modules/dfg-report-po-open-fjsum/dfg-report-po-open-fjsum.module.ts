import { Module } from '@nestjs/common';
import { DfgReportPoOpenFjsumController } from './dfg-report-po-open-fjsum.controller';
import { DfgReportPoOpenFjsumService } from './dfg-report-po-open-fjsum.service';

@Module({
  controllers: [DfgReportPoOpenFjsumController],
  providers: [DfgReportPoOpenFjsumService]
})
export class DfgReportPoOpenFjsumModule {}
