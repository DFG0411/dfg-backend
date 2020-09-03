import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsMobilePhone,
} from 'class-validator';
import {
  Entity,
  Column,
  JoinTable,
  ManyToMany,
  RelationId,
  Index,
  
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SupperEntity } from '../../base';
import { Type } from 'class-transformer';
import { UserRole } from './user-role.entity';
import { ObjectType, Field, Scalar } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
@Entity({ name: 'users' })
@Index(['userName'])
@Index(['email'])
export class User extends SupperEntity {
  // @PrimaryGeneratedColumn()
  // @Field()
  // id: number;

  @ApiProperty()
  @IsString()
  @Column({ unique: true })
  @Field()
  userName: string;

  @ApiProperty()
  @IsEmail()
  @Column({ unique: true })
  @Field()
  email: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Date)
  @Column({ nullable: true })
  @Field()
  birthed?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  @Field()
  firstName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Column({ nullable: true })
  @Field()
  lastName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  @Field()
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  @Field()
  profile?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Column({ nullable: true, length: 6, default: 'male' })
  @Field()
  gender: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsMobilePhone('zh-CN')
  @Column({ nullable: true })
  @Field()
  mobile: string;

  @ApiProperty()
  @MinLength(7)
  @Column()
  @Field()
  password: string;

  // @RelationId((self:User)=>self.roles)
  // roleIds:number[]

  @ApiProperty()
  // @IsArray({always:false})
  // @OneToMany(() => UserRole,role=>role.user,{eager:true})
  @ManyToMany(() => UserRole, {
    // onUpdate: 'CASCADE',
    // onDelete: 'CASCADE',
    eager: true,
  })
  @Field(() => [UserRole])
  // @JoinColumn({name:'roles', referencedColumnName: 'roleName' })
  // @JoinColumn({name:'roles'})
  @JoinTable({ name: 'user_roles' })
  roles: UserRole[];

  @Field()
  @Column({ nullable: true })
  avatar: string;

  @Field()
  @Column({ nullable: true })
  signature: string;
  
  @Field()
  @Column({ nullable: true })
  group: string;

  @Field()
  @Column({ nullable: true })
  notifications: number;

  @Field()
  @Column({ nullable: true ,default:'China'})
  country: string;

  @Field(()=>GraphQLJSON)
  @Column({type:"simple-json", nullable: true})
  province: {id:number,name:string};

  @Field(()=>GraphQLJSON)
  @Column({type:"simple-json", nullable: true })
  city: {id:number,name:string};

  @Field()
  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true, default: false })
  isVerified: boolean;

  @Column({ nullable: true, default: false })
  isOnline: boolean;

  @Column({ nullable: true, default: false })
  isLocked: boolean;

  @Field()
  @Column({ nullable: true, default: false })
  lockReason: string;

  @Field()
  @Column({ nullable: true, default: false })
  isActive: boolean;

  @Field()
  @Column({ nullable: true })
  resetPasswordToken: string;

  @Field()
  @Column({ nullable: true })
  resetPasswordExpires: number;
  // @BeforeInsert()
  // @BeforeUpdate()
  // hashPassword(): void {
  //   this.password = hashSync(this.password);
  // }
}
