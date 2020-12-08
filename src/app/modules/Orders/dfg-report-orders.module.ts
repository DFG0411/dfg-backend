import { Module } from '@nestjs/common';
import { DfgReportOrdersController } from './dfg-report-orders.controller';
import { DfgReportOrdersService } from './dfg-report-orders.service';
import { DfgReportOrdersProviders } from './dfg-report-orders.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportOrdersController],
  providers: [...DfgReportOrdersProviders,DfgReportOrdersService]
})
export class DfgReportOrdersModule {}
