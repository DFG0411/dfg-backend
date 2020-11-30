// import { isEmpty } from 'lodash';
// import { Op } from 'sequelize';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
// import { CheckIsValueUnique, OptimisticLocking } from '../common/decorators';
// import { MessageCodeError } from '../common/error';
// import { UserRoleCreateInputDto } from './dto/input/user-role-create.input.dto';
// import { UserRoleDeleteInputDto } from './dto/input/user-role-delete.input.dto';
import { UserRoleUpdateInputDto } from './dto/input/user-role-update.input.dto';
import {UserRole} from '../../entities/user-role.entity';
import { Repository,Like, SaveOptions, } from 'typeorm';
import { BaseService } from 'src/base';
import { UserRoleDto } from './dto/user-role.dto';
// import _ from 'lodash'
import * as _ from "lodash"

@Injectable()
export class UserRoleService extends BaseService<UserRole> {
  constructor(
    @Inject('USER_ROLE_REPOSITORY')
    protected readonly repo: Repository<UserRole>,
  ) {
    super();
  }

  async createRole(data:UserRoleDto,options?:SaveOptions):Promise<UserRole>{
    return await this.repo.save(data,options)
  }

  async createRoles(data:UserRoleDto[],options?:SaveOptions):Promise<UserRole[]>{
   
      const checked=data.filter(r=>!_.isEmpty(r.roleName))
      const hasDesc=data.filter(r=>_.isEmpty(r.roleName) && !_.isEmpty(r.description));
      if (hasDesc && hasDesc.length>0){
        hasDesc.forEach(r=>r.roleName= r.description);
      }
    
    return await this.repo.save([...checked,...hasDesc],options)
  }
  public async checkVersion(id: number): Promise<UserRole | undefined> {
    try {
      return await this.repo.findOne( id,{
        select: ['version'],
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  public async userRole(id: number): Promise<UserRole | undefined> {
    try {
      return await this.repo.findOne({
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
  ): Promise<UserRole[]> {
    try {
      const filter = `%${textFilter}%`;
      return await this.repo.find({
        take: paging,
        skip: (page - 1) * paging,
        where: {
          roleName: Like( filter),
        },
        order: {id:'ASC'},
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findRolesByNames(roleNames: string[]): Promise<UserRole[]> {
    try {
      let whereCondition = {};
      if (roleNames.length > 0) {
        whereCondition = roleNames.map((roleName: string) => {
          return {
            roleName
          };
        });
      }
      return await this.repo.find({
        where: whereCondition,
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async userRoleNameFind(roleName: string): Promise<UserRole> {
    try {
      return await this.repo.findOne({
        where: { roleName },
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
  async userRoleUpdate(id:number,data: UserRoleUpdateInputDto): Promise<UserRole> {
    try {
      return  await super.update(id, data);
    } catch (error) {
      throw new BadRequestException('Unable to update UserRole.');
    }
  }

  // @OptimisticLocking(false)
  async userRoleDelete(id: number|string): Promise<number|string> {
    try {
      // const { id, version } = data;
      return super.delete(id);
      // return id
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
