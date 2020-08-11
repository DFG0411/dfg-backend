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
import { UserRole } from './user-role.entity';
import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType()
@Entity({ name: 'user' })
export class User extends SupperEntity {
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
  password: string;

  @ApiProperty()
  @IsArray()
  @ManyToMany(() => UserRole, (role) => role.users, {
    cascade: true,
  })
  @Field(()=>[UserRole])
  @JoinTable()
  // @Field(() => [UserRoleEntity])
  roles: UserRole[];
  @Field()
  @Column({ nullable: true})
  avatar: string
  
  @Column({ nullable: true,default:false})
  isVerified: boolean
  
	@Column({ nullable: true,default:false})
	isOnline: boolean

  @Column({ nullable: true,default:false})
  isLocked: boolean
  
  @Field()
	@Column({ nullable: true,default:false})
	lockReason: string

	@Field()
	@Column({ nullable: true,default:false})
  isActive: boolean
  
  @Field()
	@Column({ nullable: true})
	resetPasswordToken: string

	@Field()
	@Column({ nullable: true})
	resetPasswordExpires: number
  // @BeforeInsert()
  // @BeforeUpdate()
  // hashPassword(): void {
  //   this.password = hashSync(this.password);
  // }
}
