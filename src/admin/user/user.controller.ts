import {Body, Controller,  Param,  Patch, Put, UseGuards} from '@nestjs/common';
// import {AuthGuard} from '@nestjs/passport';
// import * as _ from 'lodash';

import {ApiBearerAuth, ApiTags, ApiParam, ApiBody,PartialType} from '@nestjs/swagger';
import {UserService} from './user.service';
import {User} from '../entities/user.entity';
import {BaseController} from '../../base';
import { Roles } from '../auth/decorators/roles.decorator';
import { DeepPartial } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/user.input';
import { RolesGuard } from '../auth/guards/roles.guard';
@ApiTags('users')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Roles('admin')
@Controller('users')
export class UserController extends BaseController<User> {

	constructor(protected service: UserService) {
		super();
	}
	@Put('/:id')
	@ApiParam({name:'id',type:String})
	@ApiBody({type: CreateUserDto})
	public async update( @Param('id') id: number, @Body() data: UpdateUserDto): Promise<User> {
		return this.service.update(id, data);
	}
	
	@Patch('/:id')
	@ApiParam({name:'id',type:String})
	@ApiBody({type: CreateUserDto})
	public async patch(@Param('id') id: number, @Body() data: UpdateUserDto): Promise<User> {
		return this.service.patch(id, data);
	}
}

// import { object } from 'joi';
