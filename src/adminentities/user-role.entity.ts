import { Column, Entity, ManyToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { SupperEntity } from '../base/base.entity';
import { ObjectType, Field, InputType } from '@nestjs/graphql';
// import { ObjectType, Field } from '@nestjs/graphql';

@Entity({ name: 'user_role' })
@ObjectType()
// @InputType()
export class UserRoleEntity extends SupperEntity {
  @Column({ nullable: false, unique: true })
  @Field()
  name: string;
  @Column({ nullable: true })
  @Field()
  description: string;

  /** One-to-many */
  @ManyToMany(() => UserEntity, (user) => user.roles)
  @Field(() => UserEntity)
  users: UserEntity[];
}
