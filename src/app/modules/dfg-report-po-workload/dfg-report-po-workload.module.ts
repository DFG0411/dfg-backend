import { Module } from '@nestjs/common';
import { DfgReportPoWorkloadController } from './dfg-report-po-workload.controller';
import { DfgReportPoWorkloadService } from './dfg-report-po-workload.service';

@Module({
  controllers: [DfgReportPoWorkloadController],
  providers: [DfgReportPoWorkloadService]
})
export class DfgReportPoWorkloadModule {}
