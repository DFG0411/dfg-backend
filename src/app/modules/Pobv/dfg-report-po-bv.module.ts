import { Module } from '@nestjs/common';
import { DfgReportPoBvController } from './dfg-report-po-bv.controller';
import { DfgReportPoBvService } from './dfg-report-po-bv.service';
import { DfgReportPoBvProviders } from './dfg-report-po-bv.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoBvController],
  providers: [...DfgReportPoBvProviders,DfgReportPoBvService]
})
export class DfgReportPoBvModule {}
