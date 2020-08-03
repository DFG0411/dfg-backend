import { Field, Int,  InputType, } from '@nestjs/graphql';
import { UserRoleDto } from '../../user-role/dto/user-role.dto';
import { ApiProperty } from '@nestjs/swagger';
// import {DeepPartial} from 'typeorm'
// import { UserEntity } from 'src/adminentities/user.entity';
@InputType()
export class UserDto {
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  firstName: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  lastName: string;
  @Field(() => String, { nullable: true })
  @ApiProperty() 
  displayName: string;
  @Field(() => String, { nullable: false }) 
  @ApiProperty()
  name: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  email: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  phone: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  title: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  gender: string;
  @Field(() => String, { nullable: true,defaultValue:'man' }) 
  @ApiProperty()
  password: string;
  @Field(() => Date, { nullable: true }) 
  @ApiProperty()
  birthed: Date;
  @Field(() => [UserRoleDto], { nullable: false }) 
  @ApiProperty({type:()=>[UserRoleDto]})
  roles: UserRoleDto[];
}
