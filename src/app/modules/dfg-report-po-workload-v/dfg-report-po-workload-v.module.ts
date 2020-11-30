import { Module } from '@nestjs/common';
import { DfgReportPoWorkloadVController } from './dfg-report-po-workload-v.controller';
import { DfgReportPoWorkloadVService } from './dfg-report-po-workload-v.service';

@Module({
  controllers: [DfgReportPoWorkloadVController],
  providers: [DfgReportPoWorkloadVService]
})
export class DfgReportPoWorkloadVModule {}
