import { Module } from '@nestjs/common';
import { DfgReportPoWorkloadHController } from './dfg-report-po-workload-h.controller';
import { DfgReportPoWorkloadHService } from './dfg-report-po-workload-h.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoWorkloadHProviders } from './dfg-report-po-workload-h.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoWorkloadHController],
  providers: [...DfgReportPoWorkloadHProviders,DfgReportPoWorkloadHService]
})
export class DfgReportPoWorkloadHModule {}
