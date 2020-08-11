import { Entity, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn, DeepPartial, ManyToOne, BaseEntity } from 'typeorm'
import * as uuid from 'uuid'
import { Field } from '@nestjs/graphql'
import {User} from './user.entity'
import { SupperEntity } from 'src/base'
@Entity({
	name: 'files',
	orderBy: {
		createdAt: 'ASC'
	}
})
export class File extends SupperEntity {

	@Field()
	@Column()
	filename: string

	@Field()
	@Column()
	path: string

	@Field()
	@Column()
	@ManyToOne(()=>User)
	uploader: number


}
