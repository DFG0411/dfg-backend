import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from '../auth/decorators/roles.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRoleListArgsDto } from './dto/args/user-role-list.args.dto';
import { UserRoleArgsDto } from './dto/args/user-role.args.dto';
import { UserRolesArgsDto } from './dto/args/user-roles.args.dto';
// import { UserRoleCreateInputDto } from './dto/input/user-role-create.input.dto';
import { UserRoleDeleteInputDto } from './dto/input/user-role-delete.input.dto';
import { UserRoleUpdateInputDto } from './dto/input/user-role-update.input.dto';
import { UserRoleDto } from './dto/user-role.dto';
import { UserRoleService } from './user-role.service';
import { UserRole } from '../../entities/user-role.entity';
import { DeepPartial, DeleteResult } from 'typeorm';
import { UserRoleCreateInputDto } from './dto/input/user-role-create.input.dto';

@Resolver()
@UseGuards(GqlAuthGuard, RolesGuard)
@Roles('ADMIN')
export class UserRoleResolver {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Roles('MANAGER')
  @Query(() => UserRole, {
    name: 'userRole',
    nullable: true,
    description: 'user role',
  })
  async userRole(@Args() { id }: UserRoleArgsDto):Promise<UserRole> {
    return this.userRoleService.userRole(id);
  }

  @Query(() => [UserRole], {
    nullable: true,
    description:
      'filtered user role list',
  })
  async userRoleList(
    @Args() { textFilter, page, paging }: UserRoleListArgsDto,
  ) :Promise<UserRole[]>{
    return this.userRoleService.userRoleList(textFilter, page, paging);
  }

  @Roles('MANAGER')
  @Query(() => [UserRole], {
    nullable: true,
    description:
      'find roles by names',
  })
  async userRoles(@Args() { userRoleNames }: UserRolesArgsDto):Promise<UserRole[]> {
    return await this.userRoleService.findRolesByNames(userRoleNames);
  }

  @Mutation(() => UserRole)
  async userRoleCreate(@Args('data') data: UserRoleCreateInputDto) :Promise<UserRole>{
    return await this.userRoleService.create(data);
  }

  @Mutation(() => UserRole)
  async userRoleUpdate(@Args('data') data: UserRoleUpdateInputDto):Promise<UserRole> {
    return await this.userRoleService.userRoleUpdate(data.id,data);
  }

  @Mutation(() => Int)
  async userRoleDelete(@Args('data') data: UserRoleDeleteInputDto):Promise<number|string> {
    return await this.userRoleService.userRoleDelete(data.id);
  }
}
