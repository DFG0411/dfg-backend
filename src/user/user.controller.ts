import {Body, Controller,  Param,  Patch, Put} from '@nestjs/common';
// import {AuthGuard} from '@nestjs/passport';
// import * as _ from 'lodash';

import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {UserService} from './user.service';
import {UserEntity} from '../adminentities/user.entity';
import {BaseController} from '../base';
import { Roles } from '../decorators/roles.decorator';
import { DeepPartial } from 'typeorm';
@ApiTags('users')
@ApiBearerAuth()
@Roles('admin')
@Controller('users')
export class UserController extends BaseController<UserEntity> {

	constructor(protected service: UserService) {
		super();
	}
	@Put('/:id')
	public async update(@Param('id') id: number, @Body() data: DeepPartial<UserEntity>): Promise<UserEntity> {
		return this.service.update(id, data);
	}
	
	@Patch('/:id')
	public async patch(@Param('id') id: number, @Body() data: DeepPartial<UserEntity>): Promise<UserEntity> {
		return this.service.patch(id, data);
	}
}

// import { object } from 'joi';
