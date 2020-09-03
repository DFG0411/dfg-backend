
import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { cityProviders } from './city.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [CityController],

  providers: [...cityProviders ,CityService],

  exports: [],
})
export class CityModule {
}
