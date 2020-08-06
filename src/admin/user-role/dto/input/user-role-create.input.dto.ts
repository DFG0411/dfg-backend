import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserRoleCreateInputDto {
  @Field(() => String, { nullable: false }) name: string;
  @Field(() => String, { nullable: true }) description: string;
}
