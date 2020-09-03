import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { cityProviders } from './city.providers';
// import { UserResolvers } from './user.resolvers';
// import { userProviders } from './city.providers';
// import { UserRoleModule } from '../user-role/user-role.module';
// import { UserRoleService } from '../user-role/user-role.service';
// import { userRoleProviders } from '../user-role/user-role.providers';
// import { userRoleProviders } from '../user-role/user-role.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CityController],
  providers: [...cityProviders ,CityService],
  exports: [],
})
export class CityModule {
}
