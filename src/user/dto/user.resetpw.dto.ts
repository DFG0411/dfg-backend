import {ApiProperty} from '@nestjs/swagger';
import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class ResetPasswordDto {
  @ApiProperty() 
  @Field()
  name: string;
  @ApiProperty() 
  @Field()
  password: string;
  @ApiProperty() 
  @Field()
  newPassword?: string;
  @ApiProperty() 
  @Field()
  email?: string;
}
