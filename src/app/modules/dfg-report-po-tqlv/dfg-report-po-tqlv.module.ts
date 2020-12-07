import { Module } from '@nestjs/common';
import { DfgReportPoTqlvController } from './dfg-report-po-tqlv.controller';
import { DfgReportPoTqlvService } from './dfg-report-po-tqlv.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoTqlvProviders } from './dfg-report-po-tqlv.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoTqlvController],
  providers: [...DfgReportPoTqlvProviders,DfgReportPoTqlvService]
})
export class DfgReportPoTqlvModule {}
