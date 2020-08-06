import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
// import { USER_MODEL_TOKEN_MSSQL } from '../server.constants';
import { BaseService } from '../../base';
import { UserEntity } from '../entities/user.entity';
import { hashSync, compareSync } from 'bcryptjs';
// import { UserLoginDto } from './dto/user.login.dto';
// import { IToken } from 'src/auth/interfaces/token.interface';
import { ResetPasswordDto, UpdateUserDto } from './dto/user.input';
@Injectable()
export class UserService extends BaseService<UserEntity> {
  constructor(
    @Inject('USER_MODEL_TOKEN')
    protected readonly repository: Repository<UserEntity>,
  ) 
  {
    super();
  }


  async changePassword(resetPwdto: ResetPasswordDto): Promise<UserEntity> {
    if (!resetPwdto.email) {
      throw new UnauthorizedException('The email field is not provided.');
    }
    if (!resetPwdto.password) {
      throw new UnauthorizedException('The password field is not provided.');
    }
    const user: UserEntity = await this.findOne({
      name: resetPwdto.name,
      email: resetPwdto.email,
    });
    if (!user) {
      throw new UnauthorizedException('The user key and email are not valid.');
    }
    if (
      user.password !== '' &&
      !compareSync(resetPwdto.password, user.password)
    ) {
      throw new UnauthorizedException('The password of user is not correct.');
    }
    return await super.patch(user.id, {
      password: hashSync(resetPwdto.newPassword),
    });
  }

  // update & patch do not modify the password field
  public async update(
    id: number,
    data:UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.findOneById(id);
    data.password = user.password;
    return await super.update(id,data);
  }

  public async patch(
    id: number,
    data: DeepPartial<UserEntity>,
  ): Promise<UserEntity> {
    delete data.password;
    return super.patch(id, data);
  }
}
