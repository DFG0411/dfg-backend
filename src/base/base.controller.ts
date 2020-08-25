import {BaseEntity,  DeepPartial} from 'typeorm';
import {Body, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import {BaseService} from './base.service';
import { ApiBody } from '@nestjs/swagger';

export class BaseController<T extends BaseEntity> {
	protected service: BaseService<T>;
	// private dto :DeepPartial<T>={};

	@Get('/')
	public async findAll(): Promise<T[]> {
		return this.service.findAll();
	}

	@Get('/:id')
	public async findOne(@Param('id') id: number|string) : Promise<T>{
		return this.service.findOneById(id);
	}

	@Post('/')
	public async create(@Body() data: DeepPartial<T>): Promise<T> {
		return this.service.create(data);
	}

	@Put('/:id')
	// @ApiBody({type: this.dto})
	public async update(@Param('id') id: number|string, @Body() data: DeepPartial<T>): Promise<T> {
		return this.service.update(id, data);
	}

	@Patch('/:id')
	public async patch(@Param('id') id: number|string, @Body() data: DeepPartial<T>): Promise<T> {
		return this.service.patch(id, data);
	}

	@Delete('/:id')
	public async delete(@Param('id') id: number|string): Promise<number|string> {
		return await this.service.delete(id);
		// return id;
	}
}
