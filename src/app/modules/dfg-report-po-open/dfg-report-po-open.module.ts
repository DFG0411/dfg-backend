import { Module } from '@nestjs/common';
import { DfgReportPoOpenController } from './dfg-report-po-open.controller';
import { DfgReportPoOpenService } from './dfg-report-po-open.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoOpenProviders } from './dfg-report-po-open.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoOpenController],
  providers: [...DfgReportPoOpenProviders,DfgReportPoOpenService]
})
export class DfgReportPoOpenModule {}
