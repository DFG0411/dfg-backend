import { Args,  Mutation, Resolver, } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';

import { AuthService } from './auth.service';
import { TokenDto } from './interfaces/token.dto';
import { CreateUserDto, UserLoginDto, ResetPasswordDto} from '../user/dto/user.input';
@Resolver(('auth'))
export class AuthResolvers {
  constructor(private readonly authService: AuthService) {}

  @Mutation(()=>TokenDto)
  async signup(@Args('data') data: CreateUserDto): Promise<TokenDto> {
    const token = await this.authService.signUp(data);
    return {  token };
    // return { token: await this.authService.signUp(data) };
  }
  @Mutation(()=>TokenDto)
  async login(@Args('data') data: UserLoginDto): Promise<TokenDto> {
    // return { token: await this.authService.login(data) };
    const token = await this.authService.login(data);
    return {  token };
  }
  @Mutation(()=>TokenDto)
  async changePassword(@Args('id') id:number,@Args('data') data: ResetPasswordDto): Promise<TokenDto> {
    const token = await this.authService.changePassword(id,data);
    return {  token };
    // return { token: await this.authService.changePassword(data) };
  }
}
