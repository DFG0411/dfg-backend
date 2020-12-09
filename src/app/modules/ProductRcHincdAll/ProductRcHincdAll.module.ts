import { Module } from '@nestjs/common';
import { ProductRcHincdAllController } from './ProductRcHincdAll.controller';
import { ProductRcHincdAllService } from './ProductRcHincdAll.service';
import { DatabaseModule } from 'src/database/database.module';
import{ProductRcHincdAllProviders}from'./ProductRcHincdAll.provider'
@Module({
  imports:[DatabaseModule],
  controllers: [ProductRcHincdAllController],
  providers: [...ProductRcHincdAllProviders,ProductRcHincdAllService]
})
export class ProductRcHincdAllModule {}
