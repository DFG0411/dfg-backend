import {
  Controller,
  Post,
  Get,
  Body,
  Param
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { TokenDto } from './interfaces/token.dto';
import { Roles } from '../../decorators/roles.decorator';
import { ApiBearerAuth, ApiTags, ApiParam } from '@nestjs/swagger';
import { CreateUserDto, UserLoginDto, ResetPasswordDto} from '../user/dto/user.input';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  async SignIn(@Body() user: UserLoginDto): Promise<TokenDto> {
    // console.log('req:' + JSON.stringify( user));
    // console.log(JSON.stringify(body.user));
    const token = await this.authService.login(user);
    return {  token };
  }
  @Post('signUp')
  async signUp(@Body() user: CreateUserDto) : Promise<TokenDto> {
    const token = await this.authService.signUp(user);
    return {  token };
  }
  @Post('updatePassword/:id')
  @ApiParam({name:'id',type:String})
  async changePassword(@Param('id') id: number,@Body() user: ResetPasswordDto): Promise<TokenDto> {
    // console.log('req:' + JSON.stringify( user));
    // console.log(JSON.stringify(body.user));
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
}
