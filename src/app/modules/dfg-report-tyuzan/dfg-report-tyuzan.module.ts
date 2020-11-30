import { Module } from '@nestjs/common';
import { DfgReportTyuzanController } from './dfg-report-tyuzan.controller';
import { DfgReportTyuzanService } from './dfg-report-tyuzan.service';

@Module({
  controllers: [DfgReportTyuzanController],
  providers: [DfgReportTyuzanService]
})
export class DfgReportTyuzanModule {}
