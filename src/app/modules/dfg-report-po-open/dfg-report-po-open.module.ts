import { Module } from '@nestjs/common';
import { DfgReportPoOpenController } from './dfg-report-po-open.controller';
import { DfgReportPoOpenService } from './dfg-report-po-open.service';

@Module({
  controllers: [DfgReportPoOpenController],
  providers: [DfgReportPoOpenService]
})
export class DfgReportPoOpenModule {}
