import { Module } from '@nestjs/common';
import { DfgReportChukuwkController } from './dfg-report-chukuwk.controller';
import { DfgReportChukuwkService } from './dfg-report-chukuwk.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportChuKuWkProviders } from './dfg-report-chukuwk.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportChukuwkController],
  providers: [...DfgReportChuKuWkProviders,DfgReportChukuwkService]
})
export class DfgReportChukuwkModule {}
