import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { DatabaseModule } from 'src/database/database.module';
import { RptZhController } from './RptZh.controller';
import { RptZhService } from './RptZh.service';
import{RptZhProviders} from './RptZh.provider'

@Module({

  imports:[DatabaseModule],
  controllers: [RptZhController],
  providers: [...RptZhProviders,RptZhService]
})
export class RptZhModule {}
