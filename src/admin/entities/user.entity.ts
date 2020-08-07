import {
  IsArray,
  IsEmail,
  IsString,
  IsDate,
  MinLength,
  IsOptional,
  IsNumber,
} from 'class-validator';
import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { Roles } from 'decorators/roles.decorator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SupperEntity } from '../../base';
import { hashSync, } from 'bcryptjs';
import { UserRoleEntity } from './user-role.entity';
import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType()
@Entity({ name: 'user' })
export class UserEntity extends SupperEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id: number;

  @ApiProperty()
  @IsString()
  @Column({ unique: true })
  @Field()
  name: string;

  @ApiProperty()
  @IsEmail()
  @Column({ unique: true })
  @Field()
  email: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
  @Column({ nullable: true })
  @Field()
  birthed?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  @Field()
  firstName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column({ nullable: true })
  @Field()
  lastName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  @Field()
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Column({ nullable: true, length: 5, default: 'man' })
  @Field()
  gender: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsNumber()
  @Column({ nullable: true})
  @Field()
  phone: string;

  @ApiProperty()
  @MinLength(7)
  @Column()
  @Field()
  public password: string;

  @ApiProperty()
  @IsArray()
  @ManyToMany(() => UserRoleEntity, (role) => role.users, {
    cascade: true,
  })
  @Field(()=>[UserRoleEntity])
  @JoinTable()
  // @Field(() => [UserRoleEntity])
  roles: UserRoleEntity[];

  // @BeforeInsert()
  // @BeforeUpdate()
  // hashPassword(): void {
  //   this.password = hashSync(this.password);
  // }
}
