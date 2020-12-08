import { Module } from '@nestjs/common';
import { DfgReportPoBv24mController } from './dfg-report-po-bv-24m.controller';
import { DfgReportPoBv24mService } from './dfg-report-po-bv-24m.service';
import { DfgReportPoBv_24mProviders } from './dfg-report-po-bv-24m.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoBv24mController],
  providers: [...DfgReportPoBv_24mProviders,DfgReportPoBv24mService]
})
export class DfgReportPoBv24mModule {}
