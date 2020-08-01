import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserRoleDto {
  @Field(() => Int, { nullable: false }) id: number;
  @Field(() => String, { nullable: false }) name: string;
  @Field(() => String, { nullable: true }) description: string;
  // @Field(() => Int, { nullable: false }) version: number;
}
