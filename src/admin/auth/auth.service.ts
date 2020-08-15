import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  Inject,
  forwardRef,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { IJwtPayload } from './interfaces/jwt-payload.interface';
import { User } from '../entities/user.entity';
import {
  UserLoginDto,
  CreateUserDto,
  ResetPasswordDto,
} from '../user/dto/user.input';
import { compareSync } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: UserLoginDto): Promise<string> {
    const { userName, password } = loginDto;
    const user: User = await this.usersService.findOne({ userName },{relations:['roles']});
    // console.log('username:'+userName)
    console.log('user:'+JSON.stringify (user));
    // console.log('user.roles:'+JSON.stringify (user.roles));
    if (!user || user.password == '' || !compareSync(password, user.password)) {
      throw new UnauthorizedException('Login failed.');
    }
    return this.createToken(user);
  }
  createToken(user: User): string {
    const roles = user.roles ? user.roles.map((r) => r.roleName?r.roleName:'guest') : ['guest'];
    // console.log('authsvc.roles:'+JSON.stringify (user.roles));
    const { id, email, userName: name,  gender, isVerified, avatar } = user;
    const jwtPayload: IJwtPayload = {
      sub: user.id,
      user: { id, roles, email, userName: name,  gender, isVerified, avatar },
    
    };
    return this.jwtService.sign(jwtPayload);
  }

  async register(user: CreateUserDto): Promise<string> {
    const createdUser: User = await this.usersService.create(user);
    // createdUser.reload()
    return this.createToken(createdUser);
  }
  async validateUser(payload: IJwtPayload): Promise<User> {
    return await this.usersService.findOneById(payload.sub);
  }

  async changePassword(
    id: number,
    resetDto: ResetPasswordDto,
  ): Promise<string> {
    const user: User = await this.usersService.changePassword(id, resetDto);
    return this.createToken(user);
  }
  // todo logout...
  logOut(): number {
    return 0;
  }
}
