import { Module } from '@nestjs/common';
import { RptZzzhController } from './RptZzzh.controller';
import { RptZzzhService } from './RptZzzh.service';
import { DatabaseModule } from 'src/database/database.module';
import{RptZzzhProviders} from './RptZzzh.provider'
import { from } from 'rxjs';
@Module({
  imports:[DatabaseModule],
  controllers: [RptZzzhController],
  providers: [...RptZzzhProviders,RptZzzhService]
})
export class RptZzzhModule {}
