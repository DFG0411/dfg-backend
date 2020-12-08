import { Module } from '@nestjs/common';
import { DfgReportPoTqlvzController } from './dfg-report-po-tqlvz.controller';
import { DfgReportPoTqlvzService } from './dfg-report-po-tqlvz.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoTqlvZProviders } from './dfg-report-po-tqlvz.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoTqlvzController],
  providers: [...DfgReportPoTqlvZProviders,DfgReportPoTqlvzService]
})
export class DfgReportPoTqlvzModule {}
