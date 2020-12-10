import { Module } from '@nestjs/common';
import { DfgReportUninvoicedController } from './dfg-report-uninvoiced.controller';
import { DfgReportUninvoicedService } from './dfg-report-uninvoiced.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportUninvoicedProviders } from './dfg-report-uninvoiced.provider';
@Module({

  imports:[DatabaseModule],
  controllers: [DfgReportUninvoicedController],
  providers: [...DfgReportUninvoicedProviders,DfgReportUninvoicedService]
})
export class DfgReportUninvoicedModule {}
