import {Body, Controller,  Param,  Patch, Put} from '@nestjs/common';
// import {AuthGuard} from '@nestjs/passport';
// import * as _ from 'lodash';

import {ApiBearerAuth, ApiTags, ApiParam, ApiBody} from '@nestjs/swagger';
import {UserService} from './user.service';
import {UserEntity} from '../adminentities/user.entity';
import {BaseController} from '../base';
import { Roles } from '../decorators/roles.decorator';
import { DeepPartial } from 'typeorm';
import { UserDto } from './dto/user.dto';
@ApiTags('users')
@ApiBearerAuth()
@Roles('admin')
@Controller('users')
export class UserController extends BaseController<UserEntity> {

	constructor(protected service: UserService) {
		super();
	}
	@Put('/:id')
	@ApiParam({name:'id',type:String})
	@ApiBody({type: UserDto})
	public async update( @Param('id') id: number, @Body() data: UserDto): Promise<UserEntity> {
		return this.service.update(id, data);
	}
	
	@Patch('/:id')
	@ApiParam({name:'id',type:String})
	@ApiBody({type: UserDto})
	public async patch(@Param('id') id: number, @Body() data: UserDto): Promise<UserEntity> {
		return this.service.patch(id, data);
	}
}

// import { object } from 'joi';
