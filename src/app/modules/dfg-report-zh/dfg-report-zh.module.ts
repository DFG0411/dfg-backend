import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { DatabaseModule } from 'src/database/database.module';
import { DfgReportZhController } from './dfg-report-zh.controller';
import { DfgReportZhService } from './dfg-report-zh.service';
import{DfgReportZhProviders} from './dfg-report-zh.provider'

@Module({

  imports:[DatabaseModule],
  controllers: [DfgReportZhController],
  providers: [...DfgReportZhProviders,DfgReportZhService]
})
export class DfgReportZhModule {}
