import { Module } from '@nestjs/common';
import { PoBv24mController } from './PoBv24m.controller';
import { PoBv24mService } from './PoBv24m.service';
import { PoBv24mProviders } from './PoBv24m.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [PoBv24mController],
  providers: [...PoBv24mProviders,PoBv24mService]
})
export class PoBv24mModule {}
