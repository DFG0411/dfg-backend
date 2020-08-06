import { BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Entity} from 'typeorm';
// import {ApiProperty} from '@nestjs/swagger';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class SupperEntity extends BaseEntity {

	// @ApiProperty()
	@PrimaryGeneratedColumn()
	@Field()
	public id: number;

	// @ApiProperty()
	@VersionColumn()
	@Field()
	public version: number;

	// @ApiProperty()
	@CreateDateColumn()
	@Field()
	public cratedAt: Date;

	// @ApiProperty()
	@UpdateDateColumn()
	@Field()
	public updatedAt: Date;
}
