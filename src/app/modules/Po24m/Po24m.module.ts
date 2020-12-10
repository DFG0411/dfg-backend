import { Module } from '@nestjs/common';
import { Po24mController } from './Po24m.controller';
import { Po24mService } from './Po24m.service';
import { DatabaseModule } from 'src/database/database.module';
import { Po24mProviders } from './Po24m.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [Po24mController],
  providers: [...Po24mProviders,Po24mService]
})
export class Po24mModule {}
