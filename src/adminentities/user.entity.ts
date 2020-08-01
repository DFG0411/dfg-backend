import {
  IsArray,
  IsEmail,
  IsString,
  IsDate,
  MinLength,
  // Validate,
  IsOptional,
} from 'class-validator';
import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  JoinTable,
  ManyToMany,
} from 'typeorm';
// import { Roles } from 'decorators/roles.decorator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SupperEntity } from '../base';
import { hashSync } from 'bcryptjs';
import { UserRoleEntity } from './user-role.entity';
// import { ObjectType, Field } from '@nestjs/graphql';

@Entity({ name: 'user' })
export class UserEntity extends SupperEntity {
  @ApiProperty()
  @IsString()
  @Column()
 
  name: string;

  @ApiProperty()
  @IsEmail()
  @Column({ unique: true })
 
  email: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
 
  @Column({ nullable: true })
  birthed?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Column({ nullable: true })
 
  firstName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column({ nullable: true })
 
  lastName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Column({ nullable: true })
 
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Column({ nullable: true, length: 5, default: 'man' })
 
  gender: string;

  @ApiProperty()
  @MinLength(7)
  @Column()
 
  public password: string;

  @ApiProperty()
  @IsArray()
  @ManyToMany((type) => UserRoleEntity, (role) => role.users, {
    cascade: true,
  })
  @JoinTable()
  // @Field(() => [UserRoleEntity])
  roles: UserRoleEntity[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(): void {
    this.password = hashSync(this.password);
  }
}
