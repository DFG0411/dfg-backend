import { Module, } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import {  CityController } from './city.controller';
import { CityService } from './city.service';

import { CityProviders } from './city.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CityController],
  providers: [...CityProviders ,CityService],
  exports: [],
})
export class CityModule {
}
