import { Module } from '@nestjs/common';
import { DfgReportSalesController } from './dfg-report-sales.controller';
import { DfgReportSalesService } from './dfg-report-sales.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportSalesProviders } from './dfg-report-sales.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportSalesController],
  providers: [...DfgReportSalesProviders,DfgReportSalesService]
})
export class DfgReportSalesModule {}
