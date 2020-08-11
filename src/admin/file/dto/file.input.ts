import { Field,   InputType, Int, } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class FileDto {
  @Field(() => String, { nullable: false }) 
  @ApiProperty()
  filename: string;
  @Field(() => String, { nullable: false }) 
  @ApiProperty()
  path: string;
  @Field(() => Int, { nullable: true }) 
  @ApiProperty()
  uploader: number;
}
