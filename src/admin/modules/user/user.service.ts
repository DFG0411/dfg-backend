import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
// import { USER_MODEL_TOKEN_MSSQL } from '../server.constants';
import { BaseService } from '../../base';
import { User } from '../entities/user.entity';
import { hashSync, compareSync } from 'bcryptjs';
// import { UserLoginDto } from './dto/user.login.dto';
// import { IToken } from 'src/auth/interfaces/token.interface';
import {
  ResetPasswordDto,
  UpdateUserDto,
  CreateUserDto,
  CreateUserWithRolesDto,
} from './dto/user.input';
import { UserRoleService } from '../user-role/user-role.service';
import { UserRole } from '../entities/user-role.entity';
import { UserRoleDto } from '../user-role/dto/user-role.dto';
@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @Inject('USER_MODEL_TOKEN')
    protected readonly repo: Repository<User>,

    protected readonly roleService: UserRoleService,
  ) {
    super();
  }

  async create(data: CreateUserDto): Promise<User> {
    const { password } = data;

    if (!password)
      throw new BadRequestException('The password field must not be empty.');
    data.password = hashSync(password);
    const created = await super.create(data);
    // assign a guest role to new user
    return await this.assignRoles(created.id, [{ id: 4 }]);
  }
  async createWithRoles(data: CreateUserWithRolesDto): Promise<User> {
    const { password, roles } = data;
    if (!password)
      throw new BadRequestException('The password field must not be empty.');
    data.password = hashSync(password);

    data.roles=await this.parseRoles(roles);

    return await super.create(data);
  }

  private async parseRoles(roles:  DeepPartial<UserRole>[]):Promise<UserRole[]> {
    let existed = [];
    let added = [];
    if (roles?.length > 0)
    {
      const roleNames = roles.map((role) => role.roleName);
      existed = await this.roleService.findRolesByNames(roleNames);
      const nonExists = roles.filter(
        (role) =>(!!role.roleName || !!role.description) &&
          !existed.map((entity) => entity.roleName).includes(role.roleName));

      if (nonExists.length > 0)
      {
        added = await this.roleService.createRoles(nonExists);
      }
    }
    return [ ...existed, ...added ];
  }

  async changePassword(
    id: number,
    resetPwDto: ResetPasswordDto,
  ): Promise<User> {
    const { password, newPassword } = resetPwDto;

    if (!password) {
      throw new BadRequestException('The password field is not provided.');
    }
    if (!newPassword) {
      throw new BadRequestException('The new password field is not provided.');
    }
    if (password == newPassword) {
      throw new BadRequestException(
        'The new password must be different from the old one.',
      );
    }
    const user: User = await this.findOneById(id);
    if (!user) {
      throw new BadRequestException('The user key and email are not valid.');
    }
    if (user.password !== '' && !compareSync(password, user.password)) {
      throw new BadRequestException('The password of user is not correct.');
    }
    return await super.patch(id, {
      password: hashSync(resetPwDto.newPassword),
    });
  }

  // update & patch do not modify the password field
  public async update(id: number, data: UpdateUserDto): Promise<User> {
    const user = await this.findOneById(id, { cache: true });
    const { password, userName, email,roles } = user;
    return await super.update(id, { ...data, userName, email, password,roles });
  }

  public async patch(id: number, data: UpdateUserDto): Promise<User> {
    // delete data.password;
    return await super.patch(id, { ...data });
  }

  async assignRoles(id: number, roles: DeepPartial<UserRole>[]): Promise<User> {
    const parsedRoles=await this.parseRoles(roles); 
    return await super.patch(id, { roles:parsedRoles });
  }
  // async getRoles(id:number):Promise<string[]>{
  
  // }
}
