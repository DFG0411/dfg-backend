import { Module } from '@nestjs/common';
import { DfgReportPoOpenNoupController } from './dfg-report-po-open-noup.controller';
import { DfgReportPoOpenNoupService } from './dfg-report-po-open-noup.service';

@Module({
  controllers: [DfgReportPoOpenNoupController],
  providers: [DfgReportPoOpenNoupService]
})
export class DfgReportPoOpenNoupModule {}
