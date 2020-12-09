import { Module } from '@nestjs/common';
import { ChukuWkController } from './ChukuWk.controller';
import { ChukuWkService } from './ChukuWk.service';
import { DatabaseModule } from 'src/database/database.module';
import { ChukuWkProviders } from './ChukuWk.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [ChukuWkController],
  providers: [...ChukuWkProviders,ChukuWkService]
})
export class ChukuwkModule {}
