import { Module } from '@nestjs/common';
import { RptBysoKucunController } from './RptBysoKucun.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RptBysoKucunService } from './RptBysoKucun.service';
import { DfgReportBySoKuCunProviders } from './RptBysoKucun.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [RptBysoKucunController],
  providers:[...DfgReportBySoKuCunProviders,RptBysoKucunService]
})
export class RptBysoKucunModule {}
