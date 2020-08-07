import { Field, Int,  InputType, } from '@nestjs/graphql';
import { UserRoleDto } from '../../user-role/dto/user-role.dto';
import { ApiProperty } from '@nestjs/swagger';
// import {DeepPartial} from 'typeorm'
// import { UserEntity } from 'src/adminentities/user.entity';
@InputType()
export class CreateUserDto {
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  firstName: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  lastName: string;
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
  @Field(() => String, { nullable: true,defaultValue:'man'}) 
  @ApiProperty()
  gender: string;
  @Field(() => String, { nullable: false }) 
  @ApiProperty()
  password: string;
  @Field(() => Date, { nullable: true }) 
  @ApiProperty()
  birthed: Date;
  @Field(() => [UserRoleDto], { nullable: false }) 
  @ApiProperty({type:()=>[UserRoleDto]})
  roles: UserRoleDto[];
}
@InputType()
export class UpdateUserDto {
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  firstName: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  lastName: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  name: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  email: string;
  // @Field(() => String, { nullable: true }) 
  // @ApiProperty()
  // password: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  phone: string;
  @Field(() => String, { nullable: true }) 
  @ApiProperty()
  title: string;
  @Field(() => String, { nullable: true}) 
  @ApiProperty()
  gender: string;
  @Field(() => Date, { nullable: true }) 
  @ApiProperty()
  birthed: Date;
  @Field(() => [UserRoleDto], { nullable: true }) 
  @ApiProperty({type:()=>[UserRoleDto]})
  roles: UserRoleDto[];
}

@InputType()
export class UserLoginDto {  
  @Field(() => String, { nullable: false }) 
  @ApiProperty()
  name: string;
  @Field(() => String, { nullable: false }) 
  @ApiProperty()
  password: string;
}
@InputType()
export class ResetPasswordDto {
  @ApiProperty() 
  @Field()
  password: string;
  @ApiProperty() 
  @Field()
  newPassword?: string;
}
