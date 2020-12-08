import { Module } from '@nestjs/common';
import { DfgReportProductRcController } from './dfg-report-product-rc.controller';
import { DfgReportProductRcService } from './dfg-report-product-rc.service';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportProductRcProviders } from './dfg-report-product-rc.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportProductRcController],
  providers: [...DfgReportProductRcProviders,DfgReportProductRcService]
})
export class DfgReportProductRcModule {}
