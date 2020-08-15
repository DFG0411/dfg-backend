import {  Controller,  Post,  Get,  Body,  Param,  Req,  Res} from '@nestjs/common';

import { AuthService } from './auth.service';
import { TokenDto } from './interfaces/token.dto';
import { Roles } from '../../decorators/roles.decorator';
import { ApiBearerAuth, ApiTags, ApiParam } from '@nestjs/swagger';
import { CreateUserDto, UserLoginDto, ResetPasswordDto} from '../user/dto/user.input';
import { Request, Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: UserLoginDto): Promise<TokenDto> {
    const token = await this.authService.login(user);
    return {  token };
  }
  @Post('register')
  async register(@Body() user: CreateUserDto) : Promise<TokenDto> {
    const token = await this.authService.register(user);
    return {  token };
  }
  @Post('updatePassword/:id')
  @ApiParam({name:'id',type:String})
  async changePassword(@Param('id') id: number,@Body() user: ResetPasswordDto): Promise<TokenDto> {
    const token = await this.authService.changePassword(id,user);
    return { token };
  }
  @Get('authorized')
  @ApiBearerAuth()
  @Roles('user')
  public  authorized():void {
    // swagger authorization : bearer token
    console.log('Authorized route...');
  }
  @Post('logout')
    async logOut(@Req() request: Request, @Res() response: Response) {
    // response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());

    return response.statusCode=200;
  }
}
