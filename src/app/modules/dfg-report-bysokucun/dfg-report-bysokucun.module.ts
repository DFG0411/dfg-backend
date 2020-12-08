import { Module } from '@nestjs/common';
import { DfgReportBysokucunController } from './dfg-report-bysokucun.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportBysokucunService } from './dfg-report-bysokucun.service';
import { DfgReportBySoKuCunProviders } from './dfg-report-bysokucun.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportBysokucunController],
  providers:[...DfgReportBySoKuCunProviders,DfgReportBysokucunService]
})
export class DfgReportBysokucunModule {}
