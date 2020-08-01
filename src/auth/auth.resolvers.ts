import { Args, Context, Info, Mutation, Resolver, Root } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';

import { AuthService } from './auth.service';
import { IToken } from './interfaces/token.interface';
import { UserEntity } from 'src/adminentities/user.entity';
import { ResetPasswordDto } from 'src/user/dto/user.resetpw.dto';
@Resolver('auth')
export class AuthResolvers {
  constructor(private readonly authService: AuthService) {}

  @Mutation('signup')
  async signup(@Args('data') data: UserEntity): Promise<IToken> {
    return { token: await this.authService.signUp(data) };
  }
  @Mutation('login')
  async login(@Args('data') data: UserEntity): Promise<IToken> {
    return { token: await this.authService.login(data) };
  }
  @Mutation('changePassword')
  async changePassword(@Args('data') data: ResetPasswordDto): Promise<IToken> {
    return { token: await this.authService.changePassword(data) };
  }
}
