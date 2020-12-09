import { Module } from '@nestjs/common';
import { PoBvController } from './PoBv.controller';
import { PoBvService } from './PoBv.service';
import { PoBvProviders } from './PoBv.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [PoBvController],
  providers: [...PoBvProviders,PoBvService]
})
export class PoBvModule {}
