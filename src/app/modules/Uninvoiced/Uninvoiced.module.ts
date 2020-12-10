import { Module } from '@nestjs/common';
import { UninvoicedController } from './Uninvoiced.controller';
import { UninvoicedService } from './Uninvoiced.service';
import { DatabaseModule } from 'src/database/database.module';
import { UninvoicedProviders } from './Uninvoiced.provider';
@Module({

  imports:[DatabaseModule],
  controllers: [UninvoicedController],
  providers: [...UninvoicedProviders,UninvoicedService]
})
export class UninvoicedModule {}
