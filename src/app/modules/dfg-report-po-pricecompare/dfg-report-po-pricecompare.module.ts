import { Module } from '@nestjs/common';
import { DfgReportPoPricecompareController } from './dfg-report-po-pricecompare.controller';
import { DfgReportPoPricecompareService } from './dfg-report-po-pricecompare.service';

@Module({
  controllers: [DfgReportPoPricecompareController],
  providers: [DfgReportPoPricecompareService]
})
export class DfgReportPoPricecompareModule {}
