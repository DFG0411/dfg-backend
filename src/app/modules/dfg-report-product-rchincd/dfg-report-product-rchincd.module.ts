import { Module } from '@nestjs/common';
import { DfgReportProductRchincdController } from './dfg-report-product-rchincd.controller';
import { DfgReportProductRchincdService } from './dfg-report-product-rchincd.service';
import { DatabaseModule } from 'src/database/database.module';
import{DfgReportProductRcHincdProviders} from './dfg-report-product-rchincd.provider'
@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportProductRchincdController],
  providers: [...DfgReportProductRcHincdProviders,DfgReportProductRchincdService]
})
export class DfgReportProductRchincdModule {}
