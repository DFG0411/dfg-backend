import { Module } from '@nestjs/common';
import { ProductrcHincdAll } from './dfg-report-product-rchincdall.controller';
import { DfgReportProductRchincdallService } from './dfg-report-product-rchincdall.service';
import { DatabaseModule } from 'src/database/database.module';
import{DfgReportProductRcHincdAllProviders}from'./dfg-report-product-rchincdall.provider'
@Module({
  imports:[DatabaseModule],
  controllers: [ProductrcHincdAll],
  providers: [...DfgReportProductRcHincdAllProviders,DfgReportProductRchincdallService]
})
export class DfgReportProductRchincdallModule {}
