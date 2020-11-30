import { Module } from '@nestjs/common';
import { DfgReportProductRchincdController } from './dfg-report-product-rchincd.controller';
import { DfgReportProductRchincdService } from './dfg-report-product-rchincd.service';

@Module({
  controllers: [DfgReportProductRchincdController],
  providers: [DfgReportProductRchincdService]
})
export class DfgReportProductRchincdModule {}
