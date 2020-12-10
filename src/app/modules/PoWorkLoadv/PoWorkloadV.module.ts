import { Module } from '@nestjs/common';
import { PoWorkloadVController } from './PoWorkloadV.controller';
import { PoWorkloadVService } from './PoWorkloadV.service';
import { DatabaseModule } from 'src/database/database.module';
import { PoWorkloadVProviders } from './PoWorkloadV.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PoWorkloadVController],
  providers: [...PoWorkloadVProviders,PoWorkloadVService]
})
export class PoWorkloadVModule {}
