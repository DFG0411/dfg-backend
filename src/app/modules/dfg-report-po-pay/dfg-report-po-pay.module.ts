import { Module } from '@nestjs/common';
import { DfgReportPoPayController } from './dfg-report-po-pay.controller';
import { DfgReportPoPayService } from './dfg-report-po-pay.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoPayProviders } from './dfg-report-po-pay.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoPayController],
  providers: [...DfgReportPoPayProviders,DfgReportPoPayService]
})
export class DfgReportPoPayModule {}
