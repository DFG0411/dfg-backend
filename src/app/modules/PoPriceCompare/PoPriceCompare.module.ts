import { Module } from '@nestjs/common';
import { PoPriceCompareController } from './PoPriceCompare.controller';
import { PoPriceCompareService } from './PoPriceCompare.service';
import { DatabaseModule } from 'src/database/database.module';
import { PoPriceCompareProviders } from './PoPriceCompare.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PoPriceCompareController],
  providers: [...PoPriceCompareProviders,PoPriceCompareService]
})
export class PoPriceCompareModule {}
