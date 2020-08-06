import { Field, Int,  InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UserRoleDto {
  // @Field(() => Int, { nullable: false }) 
  // id: number;
  @Field(() => String, { nullable: false }) 
  @ApiProperty()
  name: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  description: string;
  // @Field(() => Int, { nullable: false }) version: number;
}
