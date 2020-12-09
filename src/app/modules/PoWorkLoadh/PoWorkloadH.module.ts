import { Module } from '@nestjs/common';
import { PoWorkloadHController } from './PoWorkloadH.controller';
import { PoWorkloadHService } from './PoWorkloadH.service';
import { DatabaseModule } from 'src/database/database.module';
import { PoWorkloadHProviders } from './PoWorkloadH.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PoWorkloadHController],
  providers: [...PoWorkloadHProviders,PoWorkloadHService]
})
export class PoWorkloadHModule {}
