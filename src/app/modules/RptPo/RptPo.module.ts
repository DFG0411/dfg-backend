import { Module } from '@nestjs/common';
import { RptPoController } from './RptPo.controller';
import { RptPoService } from './RptPo.service';
import { DatabaseModule } from 'src/database/database.module';
import { RptPoProviders } from './RptPo.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [RptPoController],
  providers: [...RptPoProviders,RptPoService]
})
export class RptPoModule {}
