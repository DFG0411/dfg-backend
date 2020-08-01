import {ApiProperty} from '@nestjs/swagger';
export class ResetPasswordDto {
  @ApiProperty() name: string;
  @ApiProperty() password: string;
  @ApiProperty() newPassword?: string;
  @ApiProperty() email?: string;
}
