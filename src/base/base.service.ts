import {  BadRequestException, Injectable } from '@nestjs/common';
import { BaseEntity,  Repository, DeepPartial, FindManyOptions, SaveOptions,} from 'typeorm';
import { validate, } from 'class-validator';
// import {Config} from '../../config/config';
import {FindOneOptions} from 'typeorm/find-options/FindOneOptions';
import {FindConditions} from 'typeorm/find-options/FindConditions';
@Injectable()
export class BaseService<T extends BaseEntity> {
	protected repo: Repository<T>;

	public async findAll(options?:FindManyOptions): Promise<T[]> {
		return await this.repo.find(options);
	}

	public async findOneById(id: number, options?: FindOneOptions<T>): Promise<T> {
		
		return await this.repo.findOne(id,options);
	}

	public async findOne(conditions?: FindConditions<T>, options?: FindOneOptions<T>): Promise<T> {
		return await this.repo.findOne(conditions, options);
	}

	/**
	 * check existence before create
	 * @param data 
	 */

	public async create(data: DeepPartial<T>/*, uniques?:any[]*/,options?:SaveOptions): Promise<T> {
		const entity: T = this.repo.create(data);
		await this.validate(entity);
		return await this.repo.save({...data},options)
		// return await entity.save();
		}
	
/**
 * replace everything except id
 * @param id 
 * @param data 
 */
	public async update(id: number, data: DeepPartial<T>,options?:SaveOptions): Promise<T> {
		// const conditions: FindConditions<T> =this.generateFilters(data);
		const found:T= await this.findOneById(id);
		if(!found){
			throw new BadRequestException('Data not exists!')
		}
		data[id]=id;
		// await this.validate(data);
		return await this.repo.recover({...data},options);
	}

	/**
	 * update on the given column
	 * @param id 
	 * @param data 
	 */
	public async patch(id: number, data: DeepPartial<T>): Promise<T> {
		const entity: T = await this.findOneById(id);
		if(!entity){
			throw new BadRequestException('Data not exists!')
		}
		// Object.assign(entity, data);
		// await this.validate(entity);
		return await this.repo.save({...entity,...data});
	}

	public async delete(id: number): Promise<number> {
		try {
			// const { id, version } = data;
			await this.repo.delete(id);
			return id
		  } catch (error) {
			throw new BadRequestException(`Can't delete the record.${this.repo.metadata.name}.id:${id}!`);
		  }	}

	// private generateFindOption(data:DeepPartial<T>):FindConditions<T>{
	// 	const filter:FindConditions<T>={};
	// 	// filter=data.map;
	// 	// for(const k in  data){
	// 	// 	filter[k]=data[k];
	// 	// }
	// 	return filter;
	// }
	// private async isExists(uniques:any[]):Promise<T>{
	// 	return (await this.repository.findOne({select:[],where:uniques}));
	// }
	private async validate(entity:T|T[]) {
		const errors = await validate(entity);
		if (errors.length) {
			throw new BadRequestException(errors);
		}
	}
}
