import { Module } from '@nestjs/common';
import { DfgReportPoWorkloadHController } from './dfg-report-po-workload-h.controller';
import { DfgReportPoWorkloadHService } from './dfg-report-po-workload-h.service';

@Module({
  controllers: [DfgReportPoWorkloadHController],
  providers: [DfgReportPoWorkloadHService]
})
export class DfgReportPoWorkloadHModule {}
