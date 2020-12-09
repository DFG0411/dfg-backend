import { Module } from '@nestjs/common';
import { PoWorkloadController } from './PoWorkload.controller';
import { PoWorkloadService } from './PoWorkload.service';
import { DatabaseModule } from 'src/database/database.module';
import { PoWorkloadProviders } from './PoWorkload.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PoWorkloadController],
  providers: [...PoWorkloadProviders,PoWorkloadService]
})
export class PoWorkloadModule {}
