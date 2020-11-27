import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class TokenDto {
  @Field()
  readonly token: string;
}
