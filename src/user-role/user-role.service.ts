// import { isEmpty } from 'lodash';
// import { Op } from 'sequelize';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
// import { CheckIsValueUnique, OptimisticLocking } from '../common/decorators';
// import { MessageCodeError } from '../common/error';
// import { UserRoleCreateInputDto } from './dto/input/user-role-create.input.dto';
// import { UserRoleDeleteInputDto } from './dto/input/user-role-delete.input.dto';
import { UserRoleUpdateInputDto } from './dto/input/user-role-update.input.dto';
import {UserRoleEntity} from '../adminentities/user-role.entity';
import { Repository,Like, DeepPartial, DeleteResult } from 'typeorm';
import { BaseService } from 'src/base';
import { UserRoleCreateInputDto } from './dto/input/user-role-create.input.dto';

@Injectable()
export class UserRoleService extends BaseService<UserRoleEntity> {
  constructor(
    @Inject('USER_ROLE_REPOSITORY')
    protected readonly repository: Repository<UserRoleEntity>,
  ) {
    super();
  }

  public async checkVersion(id: number): Promise<UserRoleEntity | undefined> {
    try {
      return await this.repository.findOne( id,{
        select: ['version'],
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  public async userRole(id: number): Promise<UserRoleEntity | undefined> {
    try {
      return await this.repository.findOne({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async userRoleList(
    textFilter: string,
    page: number,
    paging: number,
  ): Promise<UserRoleEntity[]> {
    try {
      const filter = `%${textFilter}%`;
      return await this.repository.find({
        take: paging,
        skip: (page - 1) * paging,
        where: {
          userRoleName: Like( filter),
        },
        order: {id:'ASC'},
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async userRoles(userRoleNames: string[]): Promise<UserRoleEntity[]> {
    try {
      let whereCondition = {};
      if (userRoleNames.length > 0) {
        whereCondition = userRoleNames.map((userRoleName: string) => {
          return {
            name:userRoleName,
          };
        });
      }
      return await this.repository.find({
        where: whereCondition,
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async userRoleNameFind(name: string): Promise<UserRoleEntity> {
    try {
      return await this.repository.findOne({
        where: { name },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  // @CheckIsValueUnique(
  //   'userRoleNameFind',
  //   'userRoleName',
  //   'userRole:validate:notUniqueUserRoleId',
  // )
  // async userRoleCreate(data: UserRoleCreateInputDto): Promise<UserRoleEntity> {
  //   try {
  //     return await super.create(data);
  //   } catch (error) {
  //     throw new BadRequestException('Unable to create UserRole.');
  //   }
  // }

  // @OptimisticLocking(true)
  // @CheckIsValueUnique(
  //   'userRoleNameFind',
  //   'userRoleName',
  //   'userRole:validate:notUniqueUserRoleId',
  // )
  async userRoleUpdate(id:number,data: UserRoleUpdateInputDto): Promise<UserRoleEntity> {
    try {
      return  await super.update(id, data);
    } catch (error) {
      throw new BadRequestException('Unable to update UserRole.');
    }
  }

  // @OptimisticLocking(false)
  async userRoleDelete(id: number): Promise<number> {
    try {
      // const { id, version } = data;
      return super.delete(id);
      // return id
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
