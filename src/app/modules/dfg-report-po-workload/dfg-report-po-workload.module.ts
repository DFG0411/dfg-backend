import { Module } from '@nestjs/common';
import { DfgReportPoWorkloadController } from './dfg-report-po-workload.controller';
import { DfgReportPoWorkloadService } from './dfg-report-po-workload.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoWorkloadProviders } from './dfg-report-po-workload.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoWorkloadController],
  providers: [...DfgReportPoWorkloadProviders,DfgReportPoWorkloadService]
})
export class DfgReportPoWorkloadModule {}
