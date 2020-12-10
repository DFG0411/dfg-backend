import { Module } from '@nestjs/common';
import { PoPay24mController } from './PoPay24m.controller';
import { PoPay24mService } from './PoPay24m.service';
import { DatabaseModule } from 'src/database/database.module';
import { PoPay24mProviders } from './PoPay24m.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PoPay24mController],
  providers: [...PoPay24mProviders,PoPay24mService]
})
export class PoPay24mModule {}
