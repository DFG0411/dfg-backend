import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserRoleCreateInputDto {
  @Field(() => String, { nullable: false }) roleName: string;
  @Field(() => String, { nullable: true }) description: string;
}
