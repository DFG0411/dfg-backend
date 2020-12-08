import { Module } from '@nestjs/common';
import { DfgReportPoOpenFjsumController } from './dfg-report-po-open-fjsum.controller';
import { DfgReportPoOpenFjsumService } from './dfg-report-po-open-fjsum.service';
import { DfgReportPoOpenFjsumProviders } from './dfg-report-po-open-fjsum.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoOpenFjsumController],
  providers: [...DfgReportPoOpenFjsumProviders,DfgReportPoOpenFjsumService]
})
export class DfgReportPoOpenFjsumModule {}
