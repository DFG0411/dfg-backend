import { Module } from '@nestjs/common';
import { DfgReportProductRcController } from './dfg-report-product-rc.controller';
import { DfgReportProductRcService } from './dfg-report-product-rc.service';

@Module({
  controllers: [DfgReportProductRcController],
  providers: [DfgReportProductRcService]
})
export class DfgReportProductRcModule {}
