import { Module } from '@nestjs/common';
import { PoTqlvZController } from './PoTqlvZ.controller';
import { PoTqlvZService } from './PoTqlvZ.service';
import { DatabaseModule } from 'src/database/database.module';
import { PoTqlvZProviders } from './PoTqlvZ.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PoTqlvZController],
  providers: [...PoTqlvZProviders,PoTqlvZService]
})
export class PoTqlvZModule {}
