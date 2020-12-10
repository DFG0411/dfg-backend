import { Module } from '@nestjs/common';
import { DfgReportPoController } from './dfg-report-po.controller';
import { DfgReportPoService } from './dfg-report-po.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoProviders } from './dfg-report-po.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoController],
  providers: [...DfgReportPoProviders,DfgReportPoService]
})
export class DfgReportPoModule {}
