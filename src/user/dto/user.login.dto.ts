import {ApiProperty} from '@nestjs/swagger';
import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class UserLoginDto {
  @ApiProperty() 
  @Field()
  name: string;
  @Field()
  @ApiProperty() password: string;
}
