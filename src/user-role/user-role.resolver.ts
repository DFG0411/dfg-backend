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
import { UserRoleEntity } from '../adminentities/user-role.entity';
import { DeepPartial, DeleteResult } from 'typeorm';

@Resolver()
@UseGuards(GqlAuthGuard, RolesGuard)
@Roles('ADMIN')
export class UserRoleResolver {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Roles('MANAGER')
  @Query(() => UserRoleDto, {
    name: 'userRole',
    nullable: true,
    description: 'user role',
  })
  async userRole(@Args() { id }: UserRoleArgsDto):Promise<UserRoleEntity> {
    return this.userRoleService.userRole(id);
  }

  @Query(() => [UserRoleEntity], {
    nullable: true,
    description:
      'filtered user role list',
  })
  async userRoleList(
    @Args() { textFilter, page, paging }: UserRoleListArgsDto,
  ) :Promise<UserRoleEntity[]>{
    return this.userRoleService.userRoleList(textFilter, page, paging);
  }

  @Roles('MANAGER')
  @Query(() => [UserRoleEntity], {
    nullable: true,
    description:
      'find roles by names',
  })
  async userRoles(@Args() { userRoleNames }: UserRolesArgsDto):Promise<UserRoleEntity[]> {
    return await this.userRoleService.userRoles(userRoleNames);
  }

  @Mutation(() => UserRoleEntity)
  async userRoleCreate(@Args('data') data: UserRoleEntity) :Promise<UserRoleEntity>{
    return await this.userRoleService.userRoleCreate(data);
  }

  @Mutation(() => UserRoleEntity)
  async userRoleUpdate(@Args('data') data: UserRoleUpdateInputDto):Promise<UserRoleEntity> {
    return await this.userRoleService.userRoleUpdate(data.id,data);
  }

  @Mutation(() => Int)
  async userRoleDelete(@Args('data') data: UserRoleDeleteInputDto):Promise<DeleteResult> {
    return await this.userRoleService.userRoleDelete(data.id);
  }
}
