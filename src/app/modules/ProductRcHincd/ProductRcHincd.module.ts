import { Module } from '@nestjs/common';
import { ProductRcHincdController } from './ProductRcHincd.controller';
import { ProductRcHincdService } from './ProductRcHincd.service';
import { DatabaseModule } from 'src/database/database.module';
import{ProductRcHincdProviders} from './ProductRcHincd.provider'
@Module({
  imports:[DatabaseModule],
  controllers: [ProductRcHincdController],
  providers: [...ProductRcHincdProviders,ProductRcHincdService]
})
export class ProductRcHincdModule {}
