import { Module } from '@nestjs/common';
import { DfgReportSoReceiveController } from './dfg-report-so-receive.controller';
import { DfgReportSoReceiveService } from './dfg-report-so-receive.service';

@Module({
  controllers: [DfgReportSoReceiveController],
  providers: [DfgReportSoReceiveService]
})
export class DfgReportSoReceiveModule {}
