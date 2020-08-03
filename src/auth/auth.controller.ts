import {
  Controller,
  Post,
  Get,
  Body
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { IToken } from './interfaces/token.interface';
import { Roles } from '../decorators/roles.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLoginDto } from '../user/dto/user.login.dto';
import { UserEntity } from '../adminentities/user.entity';
import { ResetPasswordDto } from 'src/user/dto/user.resetpw.dto';
import { UserDto } from 'src/user/dto/user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  async SignIn(@Body() user: UserLoginDto): Promise<IToken> {
    // console.log('req:' + JSON.stringify( user));
    // console.log(JSON.stringify(body.user));
    const token = await this.authService.login(user);
    return {  token };
  }
  @Post('signUp')
  async signUp(@Body() user: UserDto) : Promise<IToken> {
    const token = await this.authService.signUp(user);
    return {  token };
  }
  @Post('updatePassword')
  async changePassword(@Body() user: ResetPasswordDto): Promise<IToken> {
    // console.log('req:' + JSON.stringify( user));
    // console.log(JSON.stringify(body.user));
    const token = await this.authService.changePassword(user);
    return { token };
  }
  @Get('authorized')
  @ApiBearerAuth()
  @Roles('user')
  public async authorized() {
    // swagger authorization : bearer token
    console.log('Authorized route...');
  }
}
