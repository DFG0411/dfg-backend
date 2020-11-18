import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ProvinceController } from './province.controller';
import { ProvinceService } from './province.service';
import { ProvinceProviders } from './province.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProvinceController],
  providers: [...ProvinceProviders ,ProvinceService],
  exports: [],
})
export class ProvinceModule {
}
