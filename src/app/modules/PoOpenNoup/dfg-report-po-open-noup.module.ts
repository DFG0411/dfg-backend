import { Module } from '@nestjs/common';
import { DfgReportPoOpenNoupController } from './dfg-report-po-open-noup.controller';
import { DfgReportPoOpenNoupService } from './dfg-report-po-open-noup.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoOpenNoupProviders } from './dfg-report-po-open-noup.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoOpenNoupController],
  providers: [...DfgReportPoOpenNoupProviders,DfgReportPoOpenNoupService]
})
export class DfgReportPoOpenNoupModule {}
