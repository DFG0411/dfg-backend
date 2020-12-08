import { Module } from '@nestjs/common';
import { DfgReportZzzhController } from './dfg-report-zzzh.controller';
import { DfgReportZzzhService } from './dfg-report-zzzh.service';
import { DatabaseModule } from 'src/database/database.module';
import{DfgReportZzzhProviders} from './dfg-report-zzzh.provider'
import { from } from 'rxjs';
@Module({
  imports:[DatabaseModule],
  controllers: [DfgReportZzzhController],
  providers: [...DfgReportZzzhProviders,DfgReportZzzhService]
})
export class DfgReportZzzhModule {}
