import {ApiProperty} from '@nestjs/swagger';
export class UserLoginDto {
  @ApiProperty() name: string;
  @ApiProperty() password: string;
}
