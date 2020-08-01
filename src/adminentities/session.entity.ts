import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
// import { ObjectType, Field } from '@nestjs/graphql';
// import {UserEntity}  from '../user/user.entity';

@Entity({ name: 'session' })

export class Session extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  /** Many-to-one */
  // @ForeignKey(() => UserEntity)
  @Column({ nullable: false })
  userId: number;
  // @BelongsTo(() => UserEntity) user: UserEntity;

  @Column({ nullable: false }) refreshToken: string;
  @Column({ nullable: false }) expiresIn: number;
  @Column({ nullable: false }) fingerprint: string;
  @Column({ nullable: false, default: 1 }) version: number;
}
