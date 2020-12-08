import { Module } from '@nestjs/common';
import { DfgReportPo24mController } from './dfg-report-po-24m.controller';
import { DfgReportPo24mService } from './dfg-report-po-24m.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPo_24mProviders } from './dfg-report-po-24m.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPo24mController],
  providers: [...DfgReportPo_24mProviders,DfgReportPo24mService]
})
export class DfgReportPo24mModule {}
