import { Module } from '@nestjs/common';
import { ProductRcController } from './ProductRc.controller';
import { ProductRcService } from './ProductRc.service';
import { DatabaseModule } from 'src/database/database.module';
import { ProductRcProviders } from './ProductRc.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [ProductRcController],
  providers: [...ProductRcProviders,ProductRcService]
})
export class ProductRcModule {}
