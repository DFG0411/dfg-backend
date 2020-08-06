import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
// import {UserEntity}  from '../user/user.entity';

@Entity({ name: 'session' })
@ObjectType()
export class Session extends BaseEntity {
  @PrimaryGeneratedColumn() 
  @Field()
  id: number;

  /** Many-to-one */
  // @ForeignKey(() => UserEntity)
  @Column({ nullable: false })
  @Field()
  userId: number;
  // @BelongsTo(() => UserEntity) user: UserEntity;

  @Column({ nullable: false }) 
  @Field()
  refreshToken: string;
  @Column({ nullable: false }) 
  @Field()
  expiresIn: number;
  @Column({ nullable: false }) 
  @Field()
  fingerprint: string;
  @Column({ nullable: false, default: 1 }) 
  @Field()
  version: number;
}
