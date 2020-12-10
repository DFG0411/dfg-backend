import { Module } from '@nestjs/common';
import { SoReceiveController } from './SoReceive.controller';
import { SoReceiveService } from './SoReceive.service';
import { DatabaseModule } from 'src/database/database.module';
import { SoReceiveProviders } from './SoReceive.provider';
@Module({
  imports:[DatabaseModule],
  controllers: [SoReceiveController],
  providers: [...SoReceiveProviders,SoReceiveService]
})
export class SoReceiveModule {}
