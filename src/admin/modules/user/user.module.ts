import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../../../database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserResolvers } from './user.resolvers';
import { userProviders } from './user.providers';
import { UserRoleModule } from '../user-role/user-role.module';
import { UserRoleService } from '../user-role/user-role.service';
import { userRoleProviders } from '../user-role/user-role.providers';
// import { userRoleProviders } from '../user-role/user-role.providers';

@Module({
  imports: [DatabaseModule,forwardRef(()=> UserRoleModule)],
  controllers: [UserController],
  providers: [...userProviders,...userRoleProviders ,UserService, UserResolvers,UserRoleService],
  exports: [UserService],
})
export class UserModule {
}
