import { Module } from '@nestjs/common';
import { DfgReportPoWorkloadVController } from './dfg-report-po-workload-v.controller';
import { DfgReportPoWorkloadVService } from './dfg-report-po-workload-v.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoWorkloadVProviders } from './dfg-report-po-workload-v.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoWorkloadVController],
  providers: [...DfgReportPoWorkloadVProviders,DfgReportPoWorkloadVService]
})
export class DfgReportPoWorkloadVModule {}
