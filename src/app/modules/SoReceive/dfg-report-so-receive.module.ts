import { Module } from '@nestjs/common';
import { DfgReportSoReceiveController } from './dfg-report-so-receive.controller';
import { DfgReportSoReceiveService } from './dfg-report-so-receive.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportSoReceiveProviders } from './dfg-report-so-receive.provider';
@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportSoReceiveController],
  providers: [...DfgReportSoReceiveProviders,DfgReportSoReceiveService]
})
export class DfgReportSoReceiveModule {}
