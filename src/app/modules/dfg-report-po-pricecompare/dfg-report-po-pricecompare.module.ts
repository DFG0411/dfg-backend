import { Module } from '@nestjs/common';
import { DfgReportPoPricecompareController } from './dfg-report-po-pricecompare.controller';
import { DfgReportPoPricecompareService } from './dfg-report-po-pricecompare.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportPoPricecompareProviders } from './dfg-report-po-pricecompare.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportPoPricecompareController],
  providers: [...DfgReportPoPricecompareProviders,DfgReportPoPricecompareService]
})
export class DfgReportPoPricecompareModule {}
