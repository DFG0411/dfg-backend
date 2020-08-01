import {BaseEntity, DeleteResult, DeepPartial} from 'typeorm';
import {Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Put} from '@nestjs/common';
import {BaseService} from './base.service';

export class BaseController<T extends BaseEntity> {
	protected service: BaseService<T>;

	@Get('/')
	public async findAll(): Promise<T[]> {
		return this.service.findAll();
	}

	@Get('/:id')
	public async findOne(@Param('id') id: number) : Promise<T>{
		return this.service.findOneById(id);
	}

	@Post('/')
	public async create(@Body() data: DeepPartial<T>): Promise<T> {
		return this.service.create(data);
	}

	@Put('/:id')
	public async update(@Param('id') id: number, @Body() data: DeepPartial<T>): Promise<T> {
		return this.service.update(id, data);
	}

	@Patch('/:id')
	public async patch(@Param('id') id: number, @Body() data: DeepPartial<T>): Promise<T> {
		return this.service.patch(id, data);
	}

	@Delete('/:id')
	public async delete(@Param('id') id: number): Promise<DeleteResult> {
		return this.service.delete(id);
	}
}
