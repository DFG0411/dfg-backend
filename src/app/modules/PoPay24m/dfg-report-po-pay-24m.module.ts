import { Module } from '@nestjs/common';
import { DfgReportPoPay24mController } from './dfg-report-po-pay-24m.controller';
import { DfgReportPoPay24mService } from './dfg-report-po-pay-24m.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoPay_24mProviders } from './dfg-report-po-pay-24m.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoPay24mController],
  providers: [...DfgReportPoPay_24mProviders,DfgReportPoPay24mService]
})
export class DfgReportPoPay24mModule {}
