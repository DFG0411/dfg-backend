import { Module } from '@nestjs/common';
import { PoOpenController } from './PoOpen.controller';
import { PoOpenService } from './PoOpen.service';
import { DatabaseModule } from 'src/database/database.module';
import { PoOpenProviders } from './PoOpen.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PoOpenController],
  providers: [...PoOpenProviders,PoOpenService]
})
export class PoOpenModule {}
