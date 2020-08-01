import { Column,   Entity, BaseEntity, ManyToMany, } from 'typeorm'
import {UserEntity} from './user.entity';
import { SupperEntity } from '../base/base.entity';
// import { ObjectType, Field } from '@nestjs/graphql';

@Entity({ name: 'user_role' })
export class UserRoleEntity extends SupperEntity {

  @Column({ nullable: false, unique: true }) name: string;
  @Column({ nullable: true }) description: string;
  
  /** One-to-many */
  @ManyToMany(type=> UserEntity,user=>user.roles)
  users: UserEntity[];
}
