import { Column, Entity, ManyToMany, ManyToOne, Index } from 'typeorm';
import { SupperEntity } from '../../base';
import { ObjectType, Field, } from '@nestjs/graphql';
import { User } from './user.entity';
// import { ObjectType, Field } from '@nestjs/graphql';

@Entity({ name: 'roles' })
@Index(['roleName'])
@ObjectType()
// @InputType()
export class UserRole extends SupperEntity {
  @Column({ nullable: false, unique: true })
  @Field()
  roleName: string;
  @Column({ nullable: true })
  @Field()
  description: string;

  // @ManyToOne(()=>User)
  // user:User
  @ManyToMany(()=>User)
  users:User[];
}
