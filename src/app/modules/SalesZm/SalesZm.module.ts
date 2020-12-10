import { Module } from '@nestjs/common';
import { SalesZmController } from './SalesZm.controller';
import { SalesZmService } from './SalesZm.service';
import { DatabaseModule } from 'src/database/database.module';
import { SalesZmProviders } from './SalesZm.provider';
@Module({
  imports:[DatabaseModule],
  controllers: [SalesZmController],
  providers: [...SalesZmProviders,SalesZmService]
})
export class SalesZmModule {}
