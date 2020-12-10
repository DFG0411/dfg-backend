import { Module } from '@nestjs/common';
import { PoOpenFjsumController } from './PoOpenFjjsum.controller';
import { PoOpenFjsumService } from './PoOpenFjsum.service';
import { PoOpenFjsumProviders } from './PoOpenFjsum.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [PoOpenFjsumController],
  providers: [...PoOpenFjsumProviders,PoOpenFjsumService]
})
export class PoOpenFjsumModule {}
