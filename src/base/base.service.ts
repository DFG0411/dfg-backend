import {  BadRequestException, Injectable } from '@nestjs/common';
import { BaseEntity,  Repository, DeepPartial, FindManyOptions,} from 'typeorm';
import { validate, } from 'class-validator';
// import {Config} from '../../config/config';
import {FindOneOptions} from 'typeorm/find-options/FindOneOptions';
import {FindConditions} from 'typeorm/find-options/FindConditions';
@Injectable()
export class BaseService<T extends BaseEntity> {
	protected repository: Repository<T>;

	public async findAll(options?:FindManyOptions): Promise<T[]> {
		return await this.repository.find(options);
	}

	public async findOneById(id: number, options?: FindOneOptions<T>): Promise<T> {
		
		return await this.repository.findOne(id,options);
	}

	public async findOne(conditions?: FindConditions<T>, options?: FindOneOptions<T>): Promise<T> {
		return await this.repository.findOne(conditions, options);
	}

	/**
	 * check existence before create
	 * @param data 
	 */

	public async create(data: DeepPartial<T>/*, uniques?:any[]*/): Promise<T> {
		// data['id']=null;
		// console.log(JSON.stringify({...data}));
		// data.hasId=false;
		// const found=await this.repository.findOne({select:[],where:{...data},loadRelationIds:false})
		// if(found){
		// 		throw new UnprocessableEntityException('Data exists!')
		// 	}
		// console.log(this.repository.manager.connection.name);
		// if(uniques && await this.isExists(uniques)) throw new BadRequestException('Data existed.')
		const entity: T = this.repository.create(data);
		await this.validate(entity);
		return await this.repository.save({...data})
		// return await entity.save();
		}
/**
 * replace everything except id
 * @param id 
 * @param data 
 */
	public async update(id: number, data: DeepPartial<T>): Promise<T> {
		// const conditions: FindConditions<T> =this.generateFilters(data);
		const found:T= await this.findOneById(id);
		if(!found){
			throw new BadRequestException('Data not exists!')
		}
		data[id]=id;
		// await this.validate(data);
		return await this.repository.recover({...data});
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
		await this.validate(entity);
		return await this.repository.save({...entity,...data});
	}

	public async delete(id: number): Promise<number> {
		try {
			// const { id, version } = data;
			await this.repository.delete(id);
			return id
		  } catch (error) {
			throw new BadRequestException(`Can't delete the record.${this.repository.metadata.name}.id:${id}!`);
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
	private async validate(entity:T) {
		const errors = await validate(entity);
		if (errors.length) {
			throw new BadRequestException(errors);
		}
	}
}
