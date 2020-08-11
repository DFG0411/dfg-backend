import { Column, Entity, ManyToMany } from 'typeorm';
import { User } from './user.entity';
import { SupperEntity } from '../../base';
import { ObjectType, Field, } from '@nestjs/graphql';
// import { ObjectType, Field } from '@nestjs/graphql';

@Entity({ name: 'user_role' })
@ObjectType()
// @InputType()
export class UserRole extends SupperEntity {
  @Column({ nullable: false, unique: true })
  @Field()
  name: string;
  @Column({ nullable: true })
  @Field()
  description: string;

  /** One-to-many */
  @ManyToMany(() => User, (user) => user.roles)
  @Field(() => User)
  users: User[];
}
