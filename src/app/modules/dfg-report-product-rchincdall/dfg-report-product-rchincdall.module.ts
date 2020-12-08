import { Module } from '@nestjs/common';
import { DfgReportProductRchincdallController } from './dfg-report-product-rchincdall.controller';
import { DfgReportProductRchincdallService } from './dfg-report-product-rchincdall.service';
import { DatabaseModule } from 'src/database/database.module';
import{DfgReportProductRcHincdAllProviders}from'./dfg-report-product-rchincdall.provider'
@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportProductRchincdallController],
  providers: [...DfgReportProductRcHincdAllProviders,DfgReportProductRchincdallService]
})
export class DfgReportProductRchincdallModule {}
