import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  Inject,
  forwardRef,
  UnauthorizedException,
  NotAcceptableException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { IJwtPayload } from './interfaces/jwt-payload.interface';
import {UserEntity} from '../entities/user.entity';
import { UserLoginDto, CreateUserDto ,ResetPasswordDto} from '../user/dto/user.input';
import {  compareSync } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: UserLoginDto): Promise<string> {
    const user: UserEntity = await this.usersService.findOne(loginDto);
    if (!user ) {
      throw new UnauthorizedException();
    }
    const roles=user.roles.map(r=>r.name);
    const jwtPayload: IJwtPayload = {
      sub: user.id,
      roles:roles,
    };
    return this.createToken(jwtPayload);
  }
  createToken(jwtPayload: IJwtPayload):string {
    return this.jwtService.sign(jwtPayload);
  }

  async signUp(user: CreateUserDto): Promise<string> {
    // try {
      // console.log(user);

      const createdUser: UserEntity = await this.usersService.create(user);
      const roles=user.roles.map(r=>r.name);
      const jwtPayload: IJwtPayload = {
        sub: createdUser.id,
        roles:roles,
      };
      return this.createToken(jwtPayload);
    // } catch {
    //   throw new NotAcceptableException('Can`t create user.');
    // }
  }
  async validateUser(payload: IJwtPayload): Promise<UserEntity> {
    // console.log('authserv-payload:' + payload);
    return await this.usersService.findOneById(payload.sub);
  }

  async changePassword(resetDto: ResetPasswordDto): Promise<string> {
    if (!resetDto.email) {
      throw new UnauthorizedException('The email field is not provided.');
    }
    if (!resetDto.password) {
      throw new UnauthorizedException('The password field is not provided.');
    }
    let user: UserEntity = await this.usersService.findOne({name: resetDto.name,
       email: resetDto.email
      });
    if (!user) {
      throw new UnauthorizedException('The user key and email are not valid.');
    }
    if (user.password !== '' && !compareSync(resetDto.password, user.password)) {
        throw new UnauthorizedException('The password of user is not correct.');
      }
    user = await this.usersService.patch(user.id, { password: resetDto.newPassword });

    const roles=user.roles.map(r=>r.name);
    const jwtPayload: IJwtPayload = {
      sub: user.id,
      roles:roles,
    };
    return this.createToken(jwtPayload);
  }
  // todo logout...
  logOut(): number{
    return 0
  }
}
