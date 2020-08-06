import { Args,  Mutation, Resolver, } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';

import { AuthService } from './auth.service';
import { IToken } from './interfaces/token.interface';
import { CreateUserDto, UserLoginDto, ResetPasswordDto} from '../user/dto/user.input';
@Resolver(('auth'))
export class AuthResolvers {
  constructor(private readonly authService: AuthService) {}

  @Mutation(()=>IToken)
  async signup(@Args('data') data: CreateUserDto): Promise<IToken> {
    return { token: await this.authService.signUp(data) };
  }
  @Mutation(()=>IToken)
  async login(@Args('data') data: UserLoginDto): Promise<IToken> {
    return { token: await this.authService.login(data) };
  }
  @Mutation(()=>IToken)
  async changePassword(@Args('data') data: ResetPasswordDto): Promise<IToken> {
    return { token: await this.authService.changePassword(data) };
  }
}
