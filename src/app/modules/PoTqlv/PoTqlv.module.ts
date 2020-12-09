import { Module } from '@nestjs/common';
import { PoTqlvController } from './PoTqlv.controller';
import { PoTqlvService } from './PoTqlv.service';
import { DatabaseModule } from 'src/database/database.module';
import { PoTqlvProviders } from './PoTqlv.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PoTqlvController],
  providers: [...PoTqlvProviders,PoTqlvService]
})
export class PoTqlvModule {}
