import { UnprocessableEntityException } from '@nestjs/common';
import { BaseEntity, DeleteResult, Repository, DeepPartial,} from 'typeorm';
import { validate } from 'class-validator';
// import {Config} from '../../config/config';
import {FindOneOptions} from 'typeorm/find-options/FindOneOptions';
import {FindConditions} from 'typeorm/find-options/FindConditions';

export class BaseService<T extends BaseEntity> {
	protected repository: Repository<T>;

	public async findAll(): Promise<T[]> {
		return await this.repository.find();
	}

	public async findOneById(id: number, options?: FindOneOptions<T>): Promise<T> {
		return await this.repository.findOneOrFail(id,options);
	}

	public async findOne(conditions?: FindConditions<T>, options?: FindOneOptions<T>): Promise<T> {
		return await this.repository.findOneOrFail(conditions, options);
	}

	public async create(data: DeepPartial<T>): Promise<T> {
		const found=await this.repository.findOne({where:data})
		if(found){
			throw new UnprocessableEntityException('Data exists!')
		}
		const entity: T = this.repository.create(data);
		await this.validate(entity);
		return await entity.save();
	}

	public async update(id: number, data: DeepPartial<T>): Promise<T> {
		// const conditions: FindConditions<T> =this.generateFilters(data);
		const found:T= await this.findOneById(id);
		if(!found){
			throw new UnprocessableEntityException('Data not exists!')
		}
		data[id]=id;
		const entity: T = this.repository.create(data);
		await this.validate(entity);
		return await entity.save();
	}

	public async patch(id: number, data: DeepPartial<T>): Promise<T> {
		const entity: T = await this.findOneById(id);
		if(!entity){
			throw new UnprocessableEntityException('Data not exists!')
		}
		Object.assign(entity, data);
		await this.validate(entity);
		return entity.save();
	}

	public async delete(id: number): Promise<DeleteResult> {
		return this.repository.delete(id);
	}


	private async validate(entity: T) {
		const errors = await validate(entity);
		if (errors.length) {
			throw new UnprocessableEntityException(errors);
		}
	}
}
