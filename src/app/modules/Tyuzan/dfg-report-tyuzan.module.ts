import { Module } from '@nestjs/common';
import { DfgReportTyuzanController } from './dfg-report-tyuzan.controller';
import { DfgReportTyuzanService } from './dfg-report-tyuzan.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportTyuzanProviders } from './dfg-report-tyuzan.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportTyuzanController],
  providers: [...DfgReportTyuzanProviders,DfgReportTyuzanService]
})
export class DfgReportTyuzanModule {}
