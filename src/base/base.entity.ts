import {Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Entity} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class SupperEntity extends BaseEntity {

	@ApiProperty()
	@Column()
	@PrimaryGeneratedColumn()
	public id: number;

	@ApiProperty()
	@VersionColumn()
	public version: number;

	@ApiProperty()
	@CreateDateColumn()
	public cratedAt: Date;

	@ApiProperty()
	@UpdateDateColumn()
	public updatedAt: Date;
}
