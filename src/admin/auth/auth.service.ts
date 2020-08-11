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
import {User} from '../entities/user.entity';
import { UserLoginDto, CreateUserDto ,ResetPasswordDto} from '../user/dto/user.input';
import {  compareSync } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: UserLoginDto): Promise<string> {
    const{name,password}=loginDto;
    const user: User = await this.usersService.findOne({name});
    if (!user || user.password==''|| !compareSync(password,user.password)) {
      throw new UnauthorizedException('Login failed.');
    }

    const roles=user?.roles?user.roles.map(r=>r.name):['guest'];
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

      const createdUser: User = await this.usersService.create(user);
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
  async validateUser(payload: IJwtPayload): Promise<User> {
    // console.log('authserv-payload:' + payload);
    return await this.usersService.findOneById(payload.sub);
  }

  async changePassword(id:number,resetDto: ResetPasswordDto): Promise<string> {
    
    const user:User = await this.usersService.changePassword(id, resetDto );

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
