import { Module } from '@nestjs/common';
import { DfgReportProductRchincdallController } from './dfg-report-product-rchincdall.controller';
import { DfgReportProductRchincdallService } from './dfg-report-product-rchincdall.service';

@Module({
  controllers: [DfgReportProductRchincdallController],
  providers: [DfgReportProductRchincdallService]
})
export class DfgReportProductRchincdallModule {}
