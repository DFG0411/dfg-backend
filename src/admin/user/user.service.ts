import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { Repository,  } from 'typeorm';
// import { USER_MODEL_TOKEN_MSSQL } from '../server.constants';
import { BaseService } from '../../base';
import { UserEntity } from '../entities/user.entity';
import { hashSync, compareSync } from 'bcryptjs';
// import { UserLoginDto } from './dto/user.login.dto';
// import { IToken } from 'src/auth/interfaces/token.interface';
import { ResetPasswordDto, UpdateUserDto, CreateUserDto } from './dto/user.input';
@Injectable()
export class UserService extends BaseService<UserEntity> {
  constructor(
    @Inject('USER_MODEL_TOKEN')
    protected readonly repository: Repository<UserEntity>,
  ) 
  {
    super();
  }

  async create(data:CreateUserDto) :Promise<UserEntity>{
    const {password}=data;
    if (!password) throw new BadRequestException('The password field must not be empty.')
    data.password=hashSync(password);
    return await super.create(data);
  }
  async changePassword(id:number,resetPwDto: ResetPasswordDto): Promise<UserEntity> {
    const{password,newPassword}=resetPwDto;
    
    if (!password) {
      throw new BadRequestException('The password field is not provided.');
    }
    if (!newPassword) {
      throw new BadRequestException('The new password field is not provided.');
    }
    if (password==newPassword) {
      throw new BadRequestException('The new password must be different from the old one.');
    }
    const user: UserEntity = await this.findOneById(id);
    if (!user) {
      throw new BadRequestException('The user key and email are not valid.');
    }
    if (
      user.password !== '' &&
      !compareSync(password, user.password)
    ) {
      throw new BadRequestException('The password of user is not correct.');
    }
    return await super.patch(id, {
      password: hashSync(resetPwDto.newPassword),
    });
  }

  // update & patch do not modify the password field
  public async update(
    id: number,
    data:UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.findOneById(id,{cache:true});
    const pwd = user.password;
    return await super.update(id,{...data,password:pwd});
  }

  public async patch(
    id: number,
    data: UpdateUserDto,
  ): Promise<UserEntity> {
    // delete data.password;
    return await super.patch(id, data);
  }
}
